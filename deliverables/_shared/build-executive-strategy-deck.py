#!/usr/bin/env python3
"""
build-executive-strategy-deck.py
================================
Re-runnable, offline generator for the **Executive Scripting Strategy Deck**

    deliverables/00-scripting-strategy-deck.pptx   (+ .pdf via LibreOffice)

"Future-State Scripting — A Strategy for Dis-Chem"  (Bigly Labs x Dis-Chem)

This engine EXTENDS the North Star deck pipeline (build-northstar-deck.py): it
copies that deck's Dis-Chem palette and core drawing helpers verbatim, then adds
a catalogue of *parameterised* layout renderers (SPEC §2) that consume content
authored in Markdown (SPEC §3). Content agents write
`deliverables/_shared/exec-deck/content/part{0..6}-*.md`; this engine renders
them in part/slide order into the deck.

It is DEFENSIVE by design: it never crashes on a missing/empty/partially-written
content file, an unknown layout, or a missing field. Unknowns are rendered as
clearly-labelled warning slides and echoed to stderr; if `content/` is empty it
still produces a cover slide + a "no content yet" notice so the pipeline runs.

Dependencies:  python-pptx 1.0.2  (pip install python-pptx). No pyyaml needed —
the content loader is a small hand-rolled tolerant parser. No network.

Run:
    python3 deliverables/_shared/build-executive-strategy-deck.py

PDF step (run after the .pptx is built):
    libreoffice --headless --convert-to pdf deliverables/00-scripting-strategy-deck.pptx --outdir deliverables/
"""

import os
import re
import sys
import glob

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.enum.text import MSO_AUTO_SIZE
from pptx.oxml.ns import qn

# ----------------------------------------------------------------------------
# Paths
# ----------------------------------------------------------------------------
HERE = os.path.dirname(os.path.abspath(__file__))
ASSETS = os.path.join(HERE, "deck-assets")
EXEC_DECK = os.path.join(HERE, "exec-deck")
CONTENT_DIR = os.path.join(EXEC_DECK, "content")
OUT = os.path.abspath(os.path.join(HERE, "..", "00-scripting-strategy-deck.pptx"))

# Visual id -> embedded PNG file (SPEC §4 "img:*" catalogue)
IMG_MAP = {
    "medicine-cabinet": os.path.join(ASSETS, "medicine-cabinet.png"),
    "journey-board": os.path.join(ASSETS, "journey-board.png"),
    "journey-cash": os.path.join(ASSETS, "journey-cash.png"),
    "journey-moment-expanded": os.path.join(ASSETS, "journey-moment-expanded.png"),
}

# ----------------------------------------------------------------------------
# Palette (Dis-Chem) — copied verbatim from build-northstar-deck.py
# ----------------------------------------------------------------------------
GREEN = RGBColor(0x1A, 0x9B, 0x4A)   # primary accent / dividers
GREEN_DK = RGBColor(0x12, 0x6E, 0x35)
LIME = RGBColor(0xB5, 0xD3, 0x34)    # sparing accent
INK = RGBColor(0x1D, 0x1D, 0x1D)     # headings / dark text
SLATE = RGBColor(0x52, 0x52, 0x5B)   # body text
MINT = RGBColor(0xE8, 0xF5, 0xEC)    # light fill
MINT_MD = RGBColor(0xBF, 0xE3, 0xCF)  # mid mint fill
WHITE = RGBColor(0xFF, 0xFF, 0xFF)
PAPER = RGBColor(0xFA, 0xFB, 0xFA)   # near-white bg
LINE = RGBColor(0xD7, 0xDD, 0xD9)    # hairline
AMBER = RGBColor(0xB0, 0x6A, 0x00)   # reform / caution accent
CARD_BG = RGBColor(0xF4, 0xF8, 0xF5)
RED_DK = RGBColor(0x9B, 0x37, 0x37)  # "today / pain" accent

FONT = "Calibri"
FONT_LT = "Calibri Light"

# Slide geometry (16:9)
SW = Inches(13.333)
SH = Inches(7.5)

FOOTER = ("Concept for review — not an official Dis-Chem artefact  ·  "
          "Bigly Labs × Dis-Chem")

# ----------------------------------------------------------------------------
# Low-level helpers — copied verbatim from build-northstar-deck.py
# ----------------------------------------------------------------------------

def _set_bg(slide, color):
    """Solid slide background via a full-bleed rectangle sent to back."""
    rect = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, SW, SH)
    rect.fill.solid()
    rect.fill.fore_color.rgb = color
    rect.line.fill.background()
    rect.shadow.inherit = False
    sp = rect._element
    sp.getparent().remove(sp)
    slide.shapes._spTree.insert(2, sp)
    return rect


def _no_autofit(tf):
    tf.word_wrap = True
    try:
        tf.auto_size = MSO_AUTO_SIZE.NONE
    except Exception:
        pass


def add_text(slide, x, y, w, h, runs, align=PP_ALIGN.LEFT,
             anchor=MSO_ANCHOR.TOP, line_spacing=1.0, space_after=0):
    """runs: list of paragraphs; each paragraph is a list of (text, opts) tuples.
    opts: dict with size, bold, italic, color, font, underline."""
    tb = slide.shapes.add_textbox(x, y, w, h)
    tf = tb.text_frame
    _no_autofit(tf)
    tf.vertical_anchor = anchor
    tf.margin_left = 0
    tf.margin_right = 0
    tf.margin_top = 0
    tf.margin_bottom = 0
    for i, para in enumerate(runs):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.alignment = align
        if line_spacing:
            p.line_spacing = line_spacing
        if space_after:
            p.space_after = Pt(space_after)
        for text, opts in para:
            r = p.add_run()
            r.text = text
            f = r.font
            f.name = opts.get("font", FONT)
            f.size = Pt(opts.get("size", 14))
            f.bold = opts.get("bold", False)
            f.italic = opts.get("italic", False)
            f.underline = opts.get("underline", False)
            f.color.rgb = opts.get("color", INK)
    return tb


def add_rect(slide, x, y, w, h, fill=None, line=None, line_w=None,
             shape=MSO_SHAPE.RECTANGLE, shadow=False):
    sp = slide.shapes.add_shape(shape, x, y, w, h)
    if fill is None:
        sp.fill.background()
    else:
        sp.fill.solid()
        sp.fill.fore_color.rgb = fill
    if line is None:
        sp.line.fill.background()
    else:
        sp.line.color.rgb = line
        sp.line.width = line_w or Pt(1)
    sp.shadow.inherit = False
    if shadow:
        _soft_shadow(sp)
    return sp


def _soft_shadow(shape):
    """Add a subtle outer shadow to a shape."""
    spPr = shape._element.spPr
    for el in spPr.findall(qn('a:effectLst')):
        spPr.remove(el)
    effectLst = spPr.makeelement(qn('a:effectLst'), {})
    shdw = effectLst.makeelement(qn('a:outerShdw'), {
        'blurRad': '60000', 'dist': '25000', 'dir': '5400000', 'rotWithShape': '0'})
    clr = shdw.makeelement(qn('a:srgbClr'), {'val': '1D1D1D'})
    alpha = clr.makeelement(qn('a:alpha'), {'val': '22000'})
    clr.append(alpha)
    shdw.append(clr)
    effectLst.append(shdw)
    spPr.append(effectLst)


def shape_text(shape, runs, align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.MIDDLE,
               margins=0.06):
    tf = shape.text_frame
    _no_autofit(tf)
    tf.vertical_anchor = anchor
    tf.margin_left = Inches(margins)
    tf.margin_right = Inches(margins)
    tf.margin_top = Inches(margins * 0.6)
    tf.margin_bottom = Inches(margins * 0.6)
    for i, para in enumerate(runs):
        p = tf.paragraphs[0] if i == 0 else tf.add_paragraph()
        p.alignment = align
        p.line_spacing = 1.0
        for text, opts in para:
            r = p.add_run()
            r.text = text
            f = r.font
            f.name = opts.get("font", FONT)
            f.size = Pt(opts.get("size", 12))
            f.bold = opts.get("bold", False)
            f.italic = opts.get("italic", False)
            f.color.rgb = opts.get("color", INK)
    return shape


def notes(slide, text):
    slide.notes_slide.notes_text_frame.text = text


# ----------------------------------------------------------------------------
# Slide chrome (content slides) — copied verbatim from build-northstar-deck.py
# ----------------------------------------------------------------------------
PAGE = {"n": 0}


def content_chrome(slide, kicker, title, takeaway, cite=None):
    """Standard content-slide header: kicker, title, accent rule, so-what strip."""
    _set_bg(slide, WHITE)
    add_rect(slide, 0, 0, SW, Inches(0.12), fill=GREEN)
    if kicker:
        add_text(slide, Inches(0.6), Inches(0.34), Inches(11.5), Inches(0.3),
                 [[(kicker.upper(), {"size": 11, "bold": True, "color": GREEN,
                                     "font": FONT})]])
    add_text(slide, Inches(0.6), Inches(0.62), Inches(12.1), Inches(0.9),
             [[(title, {"size": 27, "bold": True, "color": INK})]],
             line_spacing=0.98)
    if takeaway:
        sy = Inches(1.62)
        add_rect(slide, Inches(0.6), sy, Inches(0.09), Inches(0.52), fill=GREEN)
        band = add_rect(slide, Inches(0.69), sy, Inches(12.04), Inches(0.52), fill=MINT)
        shape_text(band, [[("So what:  ", {"size": 12.5, "bold": True, "color": GREEN_DK}),
                           (takeaway, {"size": 12.5, "bold": False, "color": INK})]],
                   align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.MIDDLE, margins=0.16)
    if cite:
        add_text(slide, Inches(0.6), Inches(7.06), Inches(8.0), Inches(0.3),
                 [[("Source: ", {"size": 8, "italic": True, "color": SLATE}),
                   (cite, {"size": 8, "italic": True, "color": GREEN_DK})]])
    _footer(slide)


def _footer(slide):
    PAGE["n"] += 1
    add_rect(slide, Inches(0.0), Inches(7.18), SW, Pt(0.75), fill=LINE)
    add_text(slide, Inches(0.6), Inches(7.24), Inches(11.0), Inches(0.24),
             [[(FOOTER, {"size": 7.5, "color": SLATE})]])
    add_text(slide, Inches(12.4), Inches(7.24), Inches(0.7), Inches(0.24),
             [[(str(PAGE["n"]), {"size": 8, "bold": True, "color": GREEN_DK})]],
             align=PP_ALIGN.RIGHT)


def new_slide(prs):
    return prs.slides.add_slide(prs.slide_layouts[6])  # blank


# ----------------------------------------------------------------------------
# Section divider — copied verbatim from build-northstar-deck.py
# ----------------------------------------------------------------------------

def section_divider(prs, num, title, subtitle):
    slide = new_slide(prs)
    _set_bg(slide, GREEN)
    add_rect(slide, Inches(11.7), Inches(0.7), Inches(0.5), Inches(2.4), fill=GREEN_DK)
    add_rect(slide, Inches(10.75), Inches(1.65), Inches(2.4), Inches(0.5), fill=GREEN_DK)
    add_text(slide, Inches(0.9), Inches(2.7), Inches(2.0), Inches(0.6),
             [[(num, {"size": 40, "bold": True, "color": LIME, "font": FONT_LT})]])
    add_rect(slide, Inches(0.95), Inches(3.55), Inches(0.9), Inches(0.06), fill=LIME)
    add_text(slide, Inches(0.9), Inches(3.75), Inches(11.0), Inches(1.4),
             [[(title, {"size": 34, "bold": True, "color": WHITE})]], line_spacing=1.0)
    if subtitle:
        add_text(slide, Inches(0.95), Inches(5.0), Inches(10.6), Inches(1.0),
                 [[(subtitle, {"size": 14, "color": MINT_MD})]], line_spacing=1.15)
    PAGE["n"] += 1
    add_text(slide, Inches(12.4), Inches(7.24), Inches(0.7), Inches(0.24),
             [[(str(PAGE["n"]), {"size": 8, "bold": True, "color": MINT_MD})]],
             align=PP_ALIGN.RIGHT)
    return slide


# ----------------------------------------------------------------------------
# Shared building blocks (reused across layouts)
# ----------------------------------------------------------------------------

def _bullet_block(slide, x, y, w, items, size=12.5, color=INK, gap=0.82,
                  marker="▸ ", marker_color=GREEN):
    yy = y
    for it in items:
        add_text(slide, x, yy, w, Inches(0.78),
                 [[(marker, {"size": size, "bold": True, "color": marker_color}),
                   (it, {"size": size, "color": color})]], line_spacing=1.05)
        yy += Inches(gap)


def _pillar_grid(slide, items, top, cols, accent, card_h=None, small=False):
    """items: list of (id, name, desc) tuples."""
    n = len(items)
    if n == 0:
        return
    gx = Inches(0.22)
    gy = Inches(0.22)
    lx = Inches(0.6)
    avail_w = SW - lx * 2
    cw = (avail_w - gx * (cols - 1)) / cols
    if card_h is None:
        card_h = Inches(1.72)
    for idx, (pid, name, desc) in enumerate(items):
        r, c = divmod(idx, cols)
        x = lx + c * (cw + gx)
        y = top + r * (card_h + gy)
        add_rect(slide, x, y, cw, card_h, fill=CARD_BG, line=LINE,
                 shape=MSO_SHAPE.ROUNDED_RECTANGLE, shadow=True)
        if pid:
            badge = add_rect(slide, x + Inches(0.18), y + Inches(0.18), Inches(0.62),
                             Inches(0.42), fill=accent, shape=MSO_SHAPE.ROUNDED_RECTANGLE)
            shape_text(badge, [[(pid, {"size": 14, "bold": True, "color": WHITE})]],
                       align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE, margins=0.02)
            name_x = x + Inches(0.95)
            name_w = cw - Inches(1.1)
        else:
            name_x = x + Inches(0.2)
            name_w = cw - Inches(0.4)
        nsize = 11.5 if not small else 11
        dsize = 9.5 if not small else 8.7
        add_text(slide, name_x, y + Inches(0.16), name_w, Inches(0.7),
                 [[(name, {"size": nsize, "bold": True, "color": INK})]],
                 line_spacing=0.95)
        if desc:
            add_text(slide, x + Inches(0.2), y + Inches(0.78 if not small else 0.74),
                     cw - Inches(0.4), card_h - Inches(0.9),
                     [[(desc, {"size": dsize, "color": SLATE})]], line_spacing=1.0)


def _flag_strip(slide, flags, y=Inches(6.78)):
    """Render honesty flags (unverified / reform) as a small on-slide footnote."""
    if not flags:
        return
    parts = []
    for fl in flags:
        f = str(fl).strip().lower()
        if f == "unverified":
            parts.append(("⚠ vendor-reported / extract-only (unverified)", AMBER))
        elif f == "reform":
            parts.append(("\U0001f52e requires regulatory reform", AMBER))
        elif f:
            parts.append((f, SLATE))
    if not parts:
        return
    runs = []
    for i, (txt, col) in enumerate(parts):
        if i:
            runs.append(("    ", {"size": 8.5, "color": SLATE}))
        runs.append((txt, {"size": 8.5, "italic": True, "color": col}))
    add_text(slide, Inches(0.6), y, Inches(9.0), Inches(0.3), [runs])


def _evidence_line(items):
    """Format an evidence[] list (vault paths/slugs) into a single cite string."""
    if not items:
        return None
    if isinstance(items, str):
        return items
    return " · ".join(str(i) for i in items)


def _render_visual(slide, visual, x, y, w, h, caption=None):
    """Render a `visual:` id at the given box.
    - img:<id>  -> embed PNG from deck-assets (fit within box, centred).
    - dia:<id>  -> labelled placeholder (WS4 implements native diagrams later).
    Returns True if anything was drawn.
    """
    if not visual:
        return False
    visual = str(visual).strip()
    if visual.startswith("img:"):
        key = visual[4:]
        path = IMG_MAP.get(key)
        if path and os.path.exists(path):
            # frame + fit-within (preserve aspect by width, clamp height)
            try:
                from PIL import Image
                iw_px, ih_px = Image.open(path).size
                aspect = iw_px / ih_px if ih_px else 1.524
            except Exception:
                aspect = 1.524
            draw_w = w
            draw_h = Emu(int(int(w) / aspect))
            if int(draw_h) > int(h):
                draw_h = h
                draw_w = Emu(int(int(h) * aspect))
            ox = x + Emu(int((int(w) - int(draw_w)) / 2))
            oy = y + Emu(int((int(h) - int(draw_h)) / 2))
            add_rect(slide, ox - Inches(0.05), oy - Inches(0.05),
                     draw_w + Inches(0.1), draw_h + Inches(0.1),
                     fill=WHITE, line=LINE, line_w=Pt(1), shadow=True)
            slide.shapes.add_picture(path, ox, oy, width=draw_w, height=draw_h)
            if caption:
                add_text(slide, x, oy + draw_h + Inches(0.06), w, Inches(0.3),
                         [[(caption, {"size": 8.5, "italic": True, "color": SLATE})]],
                         align=PP_ALIGN.CENTER)
            return True
        # missing image -> placeholder
        return _visual_placeholder(slide, x, y, w, h,
                                   f"image not found: {visual}", caption)
    if visual.startswith("dia:"):
        return _visual_placeholder(slide, x, y, w, h,
                                   f"DIAGRAM PLACEHOLDER\n{visual}",
                                   caption or "WS4 will render this native diagram "
                                   "(see exec-deck/diagrams.md)")
    # unknown visual id
    return _visual_placeholder(slide, x, y, w, h, f"unknown visual: {visual}", caption)


def _visual_placeholder(slide, x, y, w, h, label, caption=None):
    box = add_rect(slide, x, y, w, h, fill=CARD_BG, line=GREEN,
                   line_w=Pt(1.5), shape=MSO_SHAPE.ROUNDED_RECTANGLE)
    # dashed feel via lime corner tab + centred label
    add_rect(slide, x, y, Inches(0.12), h, fill=LIME)
    runs = [[(line, {"size": 12, "bold": True, "color": GREEN_DK})]
            for line in str(label).split("\n")]
    shape_text(box, runs, align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE, margins=0.2)
    if caption:
        add_text(slide, x, y + h + Inches(0.06), w, Inches(0.4),
                 [[(caption, {"size": 8.5, "italic": True, "color": SLATE})]],
                 align=PP_ALIGN.CENTER, line_spacing=0.95)
    return True


# ============================================================================
# LAYOUT-TEMPLATE RENDERERS (SPEC §2). Each consumes a `block` dict (SPEC §3).
# ============================================================================

def _g(block, key, default=None):
    """Get a field from a content block, tolerant of missing keys."""
    v = block.get(key, default)
    return v if v is not None else default


def layout_cover(prs, block):
    slide = new_slide(prs)
    _set_bg(slide, WHITE)
    add_rect(slide, 0, 0, Inches(0.45), SH, fill=GREEN)
    add_rect(slide, Inches(0.45), 0, Inches(0.08), SH, fill=LIME)
    add_rect(slide, Inches(10.55), Inches(0.9), Inches(0.62), Inches(2.9), fill=MINT_MD)
    add_rect(slide, Inches(9.4), Inches(2.04), Inches(2.9), Inches(0.62), fill=MINT_MD)
    add_text(slide, Inches(1.0), Inches(1.5), Inches(9.0), Inches(0.4),
             [[("BIGLY LABS  ×  DIS-CHEM", {"size": 13, "bold": True, "color": GREEN})]])
    title = _g(block, "title", "Future-State Scripting")
    add_text(slide, Inches(0.95), Inches(2.25), Inches(11.4), Inches(2.2),
             [[(title, {"size": 46, "bold": True, "color": INK})]], line_spacing=1.0)
    subtitle = _g(block, "subtitle", "")
    if subtitle:
        add_text(slide, Inches(1.0), Inches(4.55), Inches(11.0), Inches(0.9),
                 [[(subtitle, {"size": 16, "color": SLATE})]], line_spacing=1.15)
    rb = add_rect(slide, Inches(1.0), Inches(5.5), Inches(8.7), Inches(0.5),
                  fill=MINT, shape=MSO_SHAPE.ROUNDED_RECTANGLE)
    shape_text(rb, [[("⚠  Concept for review — not an official Dis-Chem artefact.",
                      {"size": 10.5, "bold": True, "color": GREEN_DK})]],
               anchor=MSO_ANCHOR.MIDDLE, margins=0.14)
    date = _g(block, "date", "")
    foot = "Executive strategy deck for Dis-Chem & Bigly leadership"
    if date:
        foot += "  ·  " + date
    add_text(slide, Inches(1.0), Inches(6.7), Inches(10.0), Inches(0.4),
             [[(foot, {"size": 11, "color": SLATE})]])
    PAGE["n"] += 1
    _maybe_notes(slide, block)
    return slide


def layout_exec_summary(prs, block):
    slide = new_slide(prs)
    content_chrome(slide, _g(block, "kicker", "Executive summary"),
                   _g(block, "title", "The strategy in one slide"),
                   _g(block, "so_what", ""), cite=_evidence_line(_g(block, "evidence")))
    top = Inches(2.45)
    body = _g(block, "body", []) or []
    visual = _g(block, "visual")
    if visual:
        # body left, visual right
        colw = Inches(7.0)
        _bullet_block(slide, Inches(0.6), top + Inches(0.1), colw - Inches(0.2),
                      body, size=12.5, gap=0.78)
        _render_visual(slide, visual, Inches(7.9), top, Inches(4.85), Inches(4.0),
                       caption=None)
    else:
        # single emphasis card with bullets
        add_rect(slide, Inches(0.6), top, Inches(12.13), Inches(4.1), fill=CARD_BG,
                 line=LINE, shape=MSO_SHAPE.ROUNDED_RECTANGLE, shadow=True)
        _bullet_block(slide, Inches(0.95), top + Inches(0.35), Inches(11.4),
                      body, size=14, gap=0.82)
    _flag_strip(slide, _g(block, "flags"))
    _maybe_notes(slide, block)
    return slide


def layout_section_divider(prs, block):
    return section_divider(prs, str(_g(block, "num", "")),
                            _g(block, "title", ""), _g(block, "subtitle", ""))


def layout_theme(prs, block):
    slide = new_slide(prs)
    content_chrome(slide, _g(block, "kicker", ""), _g(block, "title", "Untitled"),
                   _g(block, "so_what", ""), cite=_evidence_line(_g(block, "evidence")))
    top = Inches(2.45)
    body = _g(block, "body", []) or []
    visual = _g(block, "visual")
    if visual:
        colw = Inches(6.7)
        _bullet_block(slide, Inches(0.6), top, colw - Inches(0.2), body,
                      size=12.5, gap=0.74)
        _render_visual(slide, visual, Inches(7.55), top, Inches(5.2), Inches(3.9),
                       caption=None)
    else:
        _bullet_block(slide, Inches(0.6), top, Inches(8.2), body, size=13.5, gap=0.8)
        ev = _g(block, "evidence")
        # evidence pulled into the cite line already; nothing extra needed
    _flag_strip(slide, _g(block, "flags"))
    _maybe_notes(slide, block)
    return slide


def layout_market_profile(prs, block):
    slide = new_slide(prs)
    content_chrome(slide, _g(block, "kicker", "Global benchmark"),
                   _g(block, "title", "Untitled market"),
                   _g(block, "so_what", ""), cite=_evidence_line(_g(block, "evidence")))
    top = Inches(2.45)
    # Left: fact tiles. Right: body bullets (+ optional visual below body).
    facts = _g(block, "facts", []) or []
    lx = Inches(0.6)
    lw = Inches(5.4)
    add_text(slide, lx, top, lw, Inches(0.3),
             [[("KEY FACTS", {"size": 11, "bold": True, "color": GREEN})]])
    yy = top + Inches(0.4)
    for fact in facts[:5]:
        label = fact.get("label", "") if isinstance(fact, dict) else ""
        value = fact.get("value", "") if isinstance(fact, dict) else str(fact)
        card = add_rect(slide, lx, yy, lw, Inches(0.72), fill=WHITE, line=LINE,
                        shape=MSO_SHAPE.ROUNDED_RECTANGLE, shadow=True)
        add_rect(slide, lx, yy, Inches(0.1), Inches(0.72), fill=GREEN)
        add_text(slide, lx + Inches(0.28), yy + Inches(0.08), lw - Inches(0.5), Inches(0.3),
                 [[(label, {"size": 10, "bold": True, "color": SLATE})]])
        add_text(slide, lx + Inches(0.28), yy + Inches(0.36), lw - Inches(0.5), Inches(0.32),
                 [[(value, {"size": 13, "bold": True, "color": GREEN_DK})]])
        yy += Inches(0.82)
    # Right: body
    rx = Inches(6.3)
    rw = Inches(6.4)
    body = _g(block, "body", []) or []
    add_text(slide, rx, top, rw, Inches(0.3),
             [[("WHAT IT PROVES", {"size": 11, "bold": True, "color": GREEN})]])
    visual = _g(block, "visual")
    if visual:
        _bullet_block(slide, rx, top + Inches(0.4), rw, body, size=11.5, gap=0.62)
        _render_visual(slide, visual, rx, top + Inches(2.7), rw, Inches(1.9), caption=None)
    else:
        _bullet_block(slide, rx, top + Inches(0.4), rw, body, size=12.5, gap=0.7)
    _flag_strip(slide, _g(block, "flags"))
    _maybe_notes(slide, block)
    return slide


def layout_comparison(prs, block):
    slide = new_slide(prs)
    content_chrome(slide, _g(block, "kicker", ""),
                   _g(block, "title", "Comparison"),
                   _g(block, "so_what", ""), cite=_evidence_line(_g(block, "evidence")))
    top = Inches(2.45)
    columns = _g(block, "columns", []) or []
    rows = _g(block, "rows", []) or []
    lx = Inches(0.6)
    table_w = SW - lx * 2
    ncols = max(len(columns), 1)
    cw = Emu(int(table_w) // ncols)
    # header row
    hh = Inches(0.5)
    for c, col in enumerate(columns):
        x = lx + Emu(int(cw) * c)
        cell = add_rect(slide, x, top, cw, hh, fill=GREEN, line=WHITE, line_w=Pt(1.5))
        shape_text(cell, [[(str(col), {"size": 11.5, "bold": True, "color": WHITE})]],
                   align=PP_ALIGN.CENTER, anchor=MSO_ANCHOR.MIDDLE, margins=0.08)
    # body rows
    rh = Inches(0.56)
    yy = top + hh
    for ri, row in enumerate(rows):
        cells = row if isinstance(row, list) else [row]
        bg = WHITE if ri % 2 == 0 else CARD_BG
        for c in range(ncols):
            x = lx + Emu(int(cw) * c)
            val = str(cells[c]) if c < len(cells) else ""
            cell = add_rect(slide, x, yy, cw, rh, fill=bg, line=LINE, line_w=Pt(0.75))
            bold = (c == 0)
            col_txt = INK if c == 0 else SLATE
            shape_text(cell, [[(val, {"size": 10.5, "bold": bold, "color": col_txt})]],
                       align=PP_ALIGN.LEFT if c == 0 else PP_ALIGN.CENTER,
                       anchor=MSO_ANCHOR.MIDDLE, margins=0.12)
        yy += rh
    _flag_strip(slide, _g(block, "flags"))
    _maybe_notes(slide, block)
    return slide


def layout_pillar(prs, block):
    slide = new_slide(prs)
    pid = str(_g(block, "id", ""))
    name = _g(block, "name", "Strategic pillar")
    title = f"{pid} — {name}" if pid else name
    content_chrome(slide, _g(block, "kicker", "Strategic pillar"), title,
                   _g(block, "what", ""), cite=_evidence_line(_g(block, "evidence")))
    top = Inches(2.45)
    visual = _g(block, "visual")
    colw = Inches(6.6) if visual else Inches(12.13)
    # WHY card
    why = _g(block, "why", "")
    add_text(slide, Inches(0.6), top, colw, Inches(0.3),
             [[("WHY THIS MATTERS", {"size": 11, "bold": True, "color": GREEN})]])
    add_text(slide, Inches(0.6), top + Inches(0.4), colw, Inches(1.6),
             [[(why, {"size": 13, "color": INK})]], line_spacing=1.12)
    # EXAMPLE band
    example = _g(block, "example", "")
    if example:
        ey = top + Inches(2.2)
        band = add_rect(slide, Inches(0.6), ey, colw, Inches(1.5), fill=MINT,
                        line=LINE, shape=MSO_SHAPE.ROUNDED_RECTANGLE)
        shape_text(band, [[("In practice:  ", {"size": 12, "bold": True, "color": GREEN_DK}),
                           (example, {"size": 12, "color": INK})]],
                   align=PP_ALIGN.LEFT, anchor=MSO_ANCHOR.MIDDLE, margins=0.2)
    if visual:
        _render_visual(slide, visual, Inches(7.45), top, Inches(5.3), Inches(4.0),
                       caption=None)
    _flag_strip(slide, _g(block, "flags"))
    _maybe_notes(slide, block)
    return slide


def layout_pillar_grid(prs, block):
    slide = new_slide(prs)
    content_chrome(slide, _g(block, "kicker", ""),
                   _g(block, "title", "Strategic pillars"),
                   _g(block, "so_what", ""), cite=_evidence_line(_g(block, "evidence")))
    cards = _g(block, "cards", []) or []
    items = []
    for card in cards:
        if isinstance(card, dict):
            items.append((str(card.get("id", "")), card.get("name", ""),
                          card.get("oneLiner", card.get("oneliner", ""))))
        else:
            items.append(("", str(card), ""))
    n = len(items)
    cols = 3 if n <= 6 else 4
    # size cards to fit the count
    rows = (n + cols - 1) // cols if n else 1
    card_h = Inches(1.72) if rows <= 2 else Inches(1.42)
    _pillar_grid(slide, items, top=Inches(2.45), cols=cols, accent=GREEN,
                 card_h=card_h, small=(n > 6))
    _flag_strip(slide, _g(block, "flags"))
    _maybe_notes(slide, block)
    return slide


def layout_diagram_hero(prs, block):
    slide = new_slide(prs)
    content_chrome(slide, _g(block, "kicker", ""),
                   _g(block, "title", "Diagram"),
                   _g(block, "so_what", ""), cite=_evidence_line(_g(block, "evidence")))
    top = Inches(2.4)
    visual = _g(block, "visual")
    caption = _g(block, "caption", "")
    _render_visual(slide, visual, Inches(1.6), top, Inches(10.13), Inches(3.9),
                   caption=caption)
    _flag_strip(slide, _g(block, "flags"))
    _maybe_notes(slide, block)
    return slide


def layout_sources(prs, block):
    slide = new_slide(prs)
    content_chrome(slide, _g(block, "kicker", "Appendix"),
                   _g(block, "title", "Sources & evidence"),
                   _g(block, "so_what", ""))
    items = _g(block, "items", []) or _g(block, "body", []) or []
    top = Inches(2.4)
    # two-column list if long
    half = (len(items) + 1) // 2
    cols = [items[:half], items[half:]] if len(items) > 8 else [items]
    colw = Inches(6.0) if len(cols) == 2 else Inches(12.0)
    for ci, col_items in enumerate(cols):
        x = Inches(0.6) + ci * (colw + Inches(0.25))
        yy = top
        for it in col_items:
            add_text(slide, x, yy, colw, Inches(0.4),
                     [[("• ", {"size": 10, "bold": True, "color": GREEN}),
                       (str(it), {"size": 10.5, "color": INK})]], line_spacing=1.0)
            yy += Inches(0.36)
    _maybe_notes(slide, block)
    return slide


def layout_closing(prs, block):
    slide = new_slide(prs)
    content_chrome(slide, _g(block, "kicker", "What's next"),
                   _g(block, "title", "Where we go from here"),
                   _g(block, "so_what", ""), cite=_evidence_line(_g(block, "evidence")))
    body = _g(block, "body", []) or []
    top = Inches(2.6)
    add_rect(slide, Inches(0.6), top, Inches(12.13), Inches(3.8), fill=GREEN,
             shape=MSO_SHAPE.ROUNDED_RECTANGLE, shadow=True)
    yy = top + Inches(0.45)
    for it in body:
        add_text(slide, Inches(1.0), yy, Inches(11.3), Inches(0.7),
                 [[("▸ ", {"size": 15, "bold": True, "color": LIME}),
                   (str(it), {"size": 15, "color": WHITE})]], line_spacing=1.05)
        yy += Inches(0.85)
    _flag_strip(slide, _g(block, "flags"))
    _maybe_notes(slide, block)
    return slide


def _maybe_notes(slide, block):
    nt = _g(block, "notes")
    if nt:
        try:
            notes(slide, str(nt))
        except Exception:
            pass


# Layout dispatch table (SPEC §2 catalogue).
LAYOUTS = {
    "cover": layout_cover,
    "exec-summary": layout_exec_summary,
    "section-divider": layout_section_divider,
    "theme": layout_theme,
    "market-profile": layout_market_profile,
    "comparison": layout_comparison,
    "pillar": layout_pillar,
    "pillar-grid": layout_pillar_grid,
    "diagram-hero": layout_diagram_hero,
    "sources": layout_sources,
    "closing": layout_closing,
}


def _warning_slide(prs, message, detail=""):
    """A clearly-labelled slide for unknown layouts / fatal block errors."""
    slide = new_slide(prs)
    content_chrome(slide, "Build warning", message, detail or "")
    add_rect(slide, Inches(0.6), Inches(2.6), Inches(12.13), Inches(2.5),
             fill=RGBColor(0xFD, 0xF6, 0xE8), line=RGBColor(0xE6, 0xCB, 0x8A),
             shape=MSO_SHAPE.ROUNDED_RECTANGLE)
    add_text(slide, Inches(1.0), Inches(2.9), Inches(11.3), Inches(2.0),
             [[("⚠  ", {"size": 16, "bold": True, "color": AMBER}),
               (message, {"size": 14, "bold": True, "color": INK})],
              [(detail, {"size": 11, "color": SLATE})]], line_spacing=1.2)
    return slide


# ============================================================================
# TOLERANT CONTENT LOADER (SPEC §3)
# ============================================================================
# Format per part file: an ordered list of slide blocks, each opened by a line
#   ## SLIDE: <layout>
# followed by `key: value` lines. Multi-line list fields are written as:
#   body:
#     - item one
#     - item two
# The `facts:` field is a list of inline {label: .., value: ..} dicts:
#   facts:
#     - {label: "Apollo 24|7 orders", value: "~75k/day"}
# `evidence:`, `flags:`, `columns:` may be inline JSON-ish arrays  [a, b]  OR a
# multi-line `- item` list. `rows:` (comparison) is a multi-line list whose
# items may be inline arrays. Unknown layouts/fields never crash the build.

LIST_FIELDS = {"body", "evidence", "flags", "items", "columns", "cards", "rows", "facts"}


def _strip_inline_comment(s):
    # remove a trailing  "# ..."  comment that is not inside quotes/braces
    out = []
    in_s = in_d = False
    depth = 0
    for ch in s:
        if ch == "'" and not in_d:
            in_s = not in_s
        elif ch == '"' and not in_s:
            in_d = not in_d
        elif ch in "{[" and not in_s and not in_d:
            depth += 1
        elif ch in "}]" and not in_s and not in_d:
            depth = max(0, depth - 1)
        elif ch == "#" and not in_s and not in_d and depth == 0:
            break
        out.append(ch)
    return "".join(out).rstrip()


def _unquote(s):
    s = s.strip()
    if len(s) >= 2 and ((s[0] == s[-1] == '"') or (s[0] == s[-1] == "'")):
        return s[1:-1]
    return s


def _parse_inline_array(s):
    """Parse a bracketed inline array like [wiki/x, src-y] -> list of strings."""
    s = s.strip()
    if s.startswith("[") and s.endswith("]"):
        s = s[1:-1]
    if not s.strip():
        return []
    # split on commas not inside braces/brackets
    items, depth, cur = [], 0, ""
    for ch in s:
        if ch in "{[":
            depth += 1
        elif ch in "}]":
            depth -= 1
        if ch == "," and depth == 0:
            items.append(cur)
            cur = ""
        else:
            cur += ch
    if cur.strip():
        items.append(cur)
    return [_unquote(i) for i in items if i.strip()]


def _parse_fact(s):
    """Parse  {label: "x", value: "y"}  -> {'label': 'x', 'value': 'y'}."""
    s = s.strip()
    if s.startswith("{") and s.endswith("}"):
        s = s[1:-1]
    out = {}
    # split top-level commas
    parts, depth, cur = [], 0, ""
    in_s = in_d = False
    for ch in s:
        if ch == "'" and not in_d:
            in_s = not in_s
        elif ch == '"' and not in_s:
            in_d = not in_d
        elif ch in "{[" and not in_s and not in_d:
            depth += 1
        elif ch in "}]" and not in_s and not in_d:
            depth -= 1
        if ch == "," and depth == 0 and not in_s and not in_d:
            parts.append(cur)
            cur = ""
        else:
            cur += ch
    if cur.strip():
        parts.append(cur)
    for p in parts:
        if ":" in p:
            k, _, v = p.partition(":")
            out[k.strip()] = _unquote(v)
    return out


def _parse_list_item(field, raw):
    """Convert a single `- ...` list item for the given field."""
    raw = raw.strip()
    if field == "facts":
        return _parse_fact(raw)
    if field == "rows" and raw.startswith("["):
        return _parse_inline_array(raw)
    if raw.startswith("{") and field != "rows":
        return _parse_fact(raw)
    return _unquote(raw)


def parse_part_file(path):
    """Parse one part*.md into an ordered list of block dicts. Never raises."""
    blocks = []
    try:
        with open(path, "r", encoding="utf-8") as fh:
            lines = fh.read().splitlines()
    except Exception as exc:
        sys.stderr.write(f"[warn] could not read {path}: {exc}\n")
        return blocks

    cur = None
    cur_list_field = None  # name of a multi-line list field we are accumulating
    header_re = re.compile(r"^##\s*SLIDE:\s*(.+?)\s*$", re.IGNORECASE)
    keyval_re = re.compile(r"^([A-Za-z_][\w-]*)\s*:\s*(.*)$")

    def _close():
        if cur is not None:
            blocks.append(cur)

    for raw_line in lines:
        line = raw_line.rstrip("\n")
        m = header_re.match(line.strip())
        if m:
            _close()
            cur = {"_layout": m.group(1).strip().lower(), "_src": os.path.basename(path)}
            cur_list_field = None
            continue
        if cur is None:
            continue  # ignore preamble before first SLIDE

        stripped = line.strip()
        # multi-line list item?
        if cur_list_field and (stripped.startswith("- ") or stripped == "-"):
            item_raw = stripped[1:].strip()
            try:
                cur.setdefault(cur_list_field, []).append(
                    _parse_list_item(cur_list_field, item_raw))
            except Exception as exc:
                sys.stderr.write(f"[warn] {path}: bad list item in "
                                 f"'{cur_list_field}': {item_raw!r} ({exc})\n")
            continue

        if stripped == "":
            # blank line does not end a list block (allows spacing); skip
            continue

        km = keyval_re.match(line)
        if km:
            key = km.group(1).strip().lower()
            val = _strip_inline_comment(km.group(2)).strip()
            cur_list_field = None
            if val == "":
                # could be the opener for a multi-line list field
                if key in LIST_FIELDS:
                    cur_list_field = key
                    cur.setdefault(key, [])
                else:
                    cur[key] = ""
                continue
            # inline value
            if key in LIST_FIELDS and val.startswith("["):
                cur[key] = _parse_inline_array(val)
            elif key in LIST_FIELDS:
                # single inline scalar for a list field -> wrap
                cur[key] = [_unquote(val)]
            else:
                cur[key] = _unquote(val)
            continue
        # a stray non-key line: append to last scalar-ish (ignore safely)
        # (kept silent to avoid noise on partially-written files)

    _close()
    return blocks


def _part_sort_key(path):
    """Order files by the integer in 'part<N>' then by filename."""
    base = os.path.basename(path)
    m = re.search(r"part(\d+)", base, re.IGNORECASE)
    n = int(m.group(1)) if m else 9999
    return (n, base)


def load_content():
    """Load all part*.md files in order -> flat list of block dicts."""
    if not os.path.isdir(CONTENT_DIR):
        sys.stderr.write(f"[warn] content dir not found: {CONTENT_DIR}\n")
        return []
    files = sorted(glob.glob(os.path.join(CONTENT_DIR, "part*.md")),
                   key=_part_sort_key)
    all_blocks = []
    for f in files:
        bs = parse_part_file(f)
        sys.stderr.write(f"[info] {os.path.basename(f)}: {len(bs)} slide block(s)\n")
        all_blocks.extend(bs)
    return all_blocks


# ============================================================================
# ASSEMBLY
# ============================================================================

def _render_block(prs, block):
    layout = block.get("_layout", "")
    fn = LAYOUTS.get(layout)
    if fn is None:
        sys.stderr.write(f"[warn] unknown layout '{layout}' "
                         f"(from {block.get('_src','?')}) — rendering warning slide\n")
        _warning_slide(prs, f"Unknown layout: '{layout}'",
                       f"Block id={block.get('id','?')} in {block.get('_src','?')}. "
                       f"Known layouts: {', '.join(sorted(LAYOUTS))}.")
        return
    try:
        fn(prs, block)
    except Exception as exc:  # never let one bad block kill the build
        sys.stderr.write(f"[warn] failed to render '{layout}' "
                         f"(id={block.get('id','?')}, {block.get('_src','?')}): {exc}\n")
        _warning_slide(prs, f"Could not render '{layout}' slide",
                       f"id={block.get('id','?')} · {block.get('_src','?')} · {exc}")


def build():
    prs = Presentation()
    prs.slide_width = SW
    prs.slide_height = SH
    PAGE["n"] = 0

    blocks = load_content()

    if not blocks:
        # Empty / partial content dir: still produce a runnable deck.
        sys.stderr.write("[warn] no content blocks found — emitting placeholder deck\n")
        layout_cover(prs, {
            "title": "Future-State Scripting — A Strategy for Dis-Chem",
            "subtitle": "Executive strategy deck (content pending — engine scaffold)",
            "date": "June 2026",
        })
        _warning_slide(prs, "No content yet",
                       "deliverables/_shared/exec-deck/content/part*.md is empty or "
                       "missing. Content agents author slides to SPEC §3; this engine "
                       "renders them. Re-run once content exists.")
    else:
        # Ensure the first slide is a cover; if content didn't lead with one, add it.
        if blocks[0].get("_layout") != "cover":
            layout_cover(prs, {
                "title": "Future-State Scripting — A Strategy for Dis-Chem",
                "subtitle": "Executive strategy deck",
                "date": "June 2026",
            })
        for block in blocks:
            _render_block(prs, block)

    prs.save(OUT)
    return OUT, len(prs.slides._sldIdLst)


if __name__ == "__main__":
    path, count = build()
    size = os.path.getsize(path)
    print(f"Wrote {path}")
    print(f"Size: {size:,} bytes ({size/1024:.0f} KB)")
    print(f"Slides: {count}")
    print("PDF step:  libreoffice --headless --convert-to pdf "
          f"{os.path.relpath(path)} --outdir deliverables/")

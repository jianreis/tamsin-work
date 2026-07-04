# Hero-moment wireframes - build brief

One self-contained HTML file per concept: the single "aha" artifact that makes the
concept land for a designer audience, drawn as a **greyscale low-fidelity wireframe**.
The approved style reference is `hero-02-medicine-cabinet.html` in this folder -
**read it first and reuse its CSS variables, weights and conventions verbatim.**

## Non-negotiable style rules

- **Pure greyscale.** No colour anywhere. Emphasis = darker fill (`--fill-dark`),
  solid vs dashed borders, weight - never hue.
- Palette / type exactly as the reference: `--ink:#3a3a3a; --ink2:#7a7a7a;
  --line:#9c9c9c; --line-soft:#c9c9c9; --fill:#ececec; --fill-dark:#d6d6d6;
  --canvas:#ffffff;` font `"Helvetica Neue",Helvetica,Arial,sans-serif`;
  page background `#f2f1ef`.
- **Wireframe conventions:** crossed-box placeholder for any photo/image; pill-shaped
  chips/badges; flat grey CTA bars with 2px ink border; thin borders (1.5px) on
  components; 10px-ish radii; captions in `--ink2`.
- **Frame matches the medium.** Phone frame (as in the reference) only when the
  artifact is genuinely a phone screen. Doctor portal / pharmacist dashboard =
  a simple browser-window frame (2px ink border, rounded top bar with three grey
  dots + a grey URL slug bar). Physical artifacts (sachet, wallet pass) float free
  on the page background as flat greyscale object drawings (CSS or small inline SVG).
- **No humans, no faces, no avatars.** Outputs and touchpoints only.
- **Real content, never lorem.** South African context: Rands (`R86`), SA names
  (Grace, Sipho, Lerato, Thandi, Dr Naidoo, N. Mokoena), en-ZA spelling.
  Never use "Gogo" - use Grace.
- At most **one margin annotation** per frame (dashed callout, style as reference),
  and only where it genuinely aids comprehension.
- Bottom caption block outside the artifact, exactly like the reference:
  `<b>Hero moment</b> - Concept NN · Title.` + one line saying what the moment shows.
- Self-contained: no external requests, no web fonts, no JS unless drawing needs it.
- Layout must not clip at 760px viewport width; artifact centred, max width ~640px
  (browser-frame artifacts may go to ~700px).

## Self-check before finishing

Render and screenshot your file, then LOOK at the PNG:

```
cd /tmp/claude-0/-home-user-tamsin-work/31e2ced5-cae4-5903-bb22-22ed4dda4044/scratchpad
node -e "
const { chromium } = require('playwright-core');
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 760, height: 1200 } });
  await p.goto('file:///home/user/tamsin-work/deliverables/_shared/hero-moments/hero-NN-slug.html');
  await p.waitForTimeout(300);
  await p.screenshot({ path: 'check-NN.png', fullPage: true });
  await b.close();
})()"
```

Read the PNG with the Read tool. Check: nothing clipped, hierarchy scannable in one
glance, greyscale only, the "aha" is the visually dominant element. Fix and re-shoot
until it passes. Do NOT commit - the orchestrator handles git.

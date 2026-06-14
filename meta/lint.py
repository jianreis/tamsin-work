#!/usr/bin/env python3
"""Vault lint — health check for the LLM-Wiki (see CLAUDE.md §7 LINT).

Reports: dead wikilinks, orphan pages, ⚠️ UNVERIFIED / 🔮 requires-reform tallies,
stub pages, and links whose alias contains an unescaped pipe (Obsidian/table risk).

Usage:  python3 meta/lint.py        (run from vault root)
Exit code is always 0 — this is a report, not a gate.
"""
import os, re, sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
WIKILINK = re.compile(r"\[\[([^\]]+)\]\]")
FENCED = re.compile(r"```.*?```", re.S)
INLINE_CODE = re.compile(r"`[^`]*`")

def strip_code(text):
    """Drop fenced + inline code so example link syntax isn't treated as a link."""
    return INLINE_CODE.sub("", FENCED.sub("", text))

md_files = []
for dp, dn, fn in os.walk(ROOT):
    if "/.git" in dp:
        continue
    for f in fn:
        if f.endswith(".md"):
            md_files.append(os.path.relpath(os.path.join(dp, f), ROOT))

by_basename = defaultdict(list)
relpaths = set()
for p in md_files:
    relpaths.add(p[:-3].replace(os.sep, "/"))       # without .md, posix
    by_basename[os.path.basename(p)[:-3]].append(p)

def resolve(target):
    t = target.strip().split("#")[0].split("^")[0].strip().lstrip("./")
    if not t:
        return True  # pure anchor link within page
    if "/" in t:
        return t in relpaths or t.split("/")[-1] in by_basename
    return t in by_basename

dead = defaultdict(list)          # file -> [bad targets]
pipe_alias = defaultdict(list)    # file -> [raw links with pipe-in-alias]
incoming = defaultdict(int)       # basename -> count
unverified = 0
reform = 0
stubs = []

for p in md_files:
    text = open(os.path.join(ROOT, p), encoding="utf-8").read()
    unverified += text.count("⚠️ UNVERIFIED")
    reform += text.count("🔮")
    if re.search(r"^status:\s*stub\s*$", text, re.M):
        stubs.append(p)
    scan = strip_code(text)
    for raw in WIKILINK.findall(scan):
        parts = raw.split("|")
        target = parts[0]
        if len(parts) > 2:        # alias itself contained a pipe
            pipe_alias[p].append(raw)
        if not resolve(target):
            dead[p].append(target)
        else:
            base = target.strip().split("#")[0].lstrip("./").split("/")[-1]
            incoming[base] += 1

content_pages = [p for p in md_files if not os.path.basename(p).startswith("_")
                 and os.path.basename(p) not in ("Home.md", "README.md", "CLAUDE.md")
                 and not p.startswith("meta/")]
orphans = [p for p in content_pages if incoming[os.path.basename(p)[:-3]] == 0]

print(f"VAULT LINT  ({len(md_files)} markdown files)")
print("=" * 60)
print(f"Dead wikilinks:        {sum(len(v) for v in dead.values())} in {len(dead)} files")
for f, ts in sorted(dead.items()):
    for t in ts:
        print(f"   ✗ {f}  →  [[{t}]]")
print(f"\nPipe-in-alias links:   {sum(len(v) for v in pipe_alias.values())} (table/render risk)")
for f, ts in sorted(pipe_alias.items()):
    for t in ts:
        print(f"   | {f}  →  [[{t}]]")
print(f"\nOrphan pages (no inbound links): {len(orphans)}")
for o in sorted(orphans):
    print(f"   ○ {o}")
print(f"\nStub-status pages: {len(stubs)}")
for s in sorted(stubs):
    print(f"   • {s}")
print(f"\n⚠️ UNVERIFIED markers: {unverified}")
print(f"🔮 requires-reform markers: {reform}")

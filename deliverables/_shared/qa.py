#!/usr/bin/env python3
"""QA a deliverable HTML against DESIGN-SPEC §5. Usage: python3 qa.py <file.html>
Checks: (1) no loaded external resources; (2) embedded JS parses (node --check);
(3) every cite/ref/personaRef slug resolves to a real vault file; (4) prints
meta/economy/pillar stats. Exit 0 = pass, 1 = fail."""
import sys, re, os, subprocess, tempfile

ROOT = "/home/user/tamsin-work"
path = sys.argv[1]
html = open(path, encoding="utf-8").read()
fails = []

# 1 — external resources (allow SVG XML namespace / xmlns, which are not loads)
ext = []
for m in re.finditer(r'(https?://[^\s"\'<>]+|<link\b|<img\b|@import|\bsrc\s*=|cdn\.|googleapis|unpkg|jsdelivr)', html):
    seg = html[max(0, m.start() - 30):m.start() + 50]
    if "w3.org/2000/svg" in seg or "xmlns" in seg:
        continue
    ext.append(m.group(0))
if ext:
    fails.append("external resources: " + str(sorted(set(ext))))

# 2 — JS syntax
scripts = "\n;\n".join(re.findall(r'<script[^>]*>(.*?)</script>', html, re.S))
with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as t:
    t.write(scripts)
    jsf = t.name
r = subprocess.run(["node", "--check", jsf], capture_output=True, text=True)
if r.returncode != 0:
    tail = (r.stderr.strip().splitlines() or ["node --check failed"])[-1]
    fails.append("node --check: " + tail)

# 3 — slug resolution
by_base, relpaths = set(), set()
for dp, dn, fn in os.walk(ROOT):
    if "/.git" in dp:
        continue
    for n in fn:
        if n.endswith(".md"):
            by_base.add(n[:-3])
            relpaths.add(os.path.relpath(os.path.join(dp, n), ROOT)[:-3].replace(os.sep, "/"))

def resolve(s):
    s = s.strip().lstrip("./")
    if not s:
        return True
    if "/" in s:
        return s in relpaths or s.split("/")[-1] in by_base
    return s in by_base

slugs = set(re.findall(r'(?:cite|ref|personaRef)\s*:\s*"([^"]+)"', html))
dead = sorted(s for s in slugs if not resolve(s))
if dead:
    fails.append("unresolved slugs (%d): %s" % (len(dead), dead))

# 4 — stats
def grp(pattern, d="?"):
    m = re.search(pattern, html)
    return m.group(1) if m else d

state = grp(r'"state"\s*:\s*"([^"]+)"')
variant = grp(r'"variant"\s*:\s*([^,\n]+)')
insured_n = len(re.findall(r'insured\s*:\s*\{', html))
cash_n = len(re.findall(r'cash\s*:\s*\{', html))
pillars = sorted(set(re.findall(r'"([SU][0-9]+)"', html)))
mot = html.count("momentOfTruth")
reform = html.count("reform")
gaps = html.count("⚠")
print("FILE: %s  (%d bytes)" % (path, len(html)))
print("  meta.state=%s  variant=%s" % (state, variant.strip() if variant != "?" else variant))
print("  byEconomy blocks: insured=%d cash=%d" % (insured_n, cash_n))
print("  pillar ids referenced: %s" % pillars)
print("  momentOfTruth=%d  reform-tokens=%d  gap(⚠)=%d" % (mot, reform, gaps))
print("  citation slugs: %d checked, %d unresolved" % (len(slugs), len(dead)))
print("RESULT:", "❌ FAIL — " + " | ".join(fails) if fails else "✅ PASS")
sys.exit(1 if fails else 0)

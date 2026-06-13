# Future-State Pharmacy Scripting — Ground-Truth Vault

A research-backed Obsidian vault that establishes the **ground truth** for
designing a **future-state prescription ("scripting") experience** for a South
African retail pharmacy (anchored on **Dis-Chem**), built at **Bigly Labs**.

It exists so that a service designer **and an agentic fleet** can produce
practical-but-futuristic **service blueprints** and **customer journey maps**
for prescription submission, validation, dispensing, payment, collection and
delivery — without re-deriving the domain every time.

## How to read this vault
1. **Open `Home.md`** — the map of content. Everything links from there.
2. **Read `CLAUDE.md`** — the schema. It explains the structure and the rules
   any contributor (human or agent) follows.
3. Browse `wiki/` for synthesised knowledge; `sources/` for the evidence;
   `design-kit/` for the personas, journeys and templates you'll actually
   build with; `meta/` for the punchlist, glossary and open questions.

## Methodology
Built on Andrej Karpathy's **"LLM Wiki"** pattern (Apr 2026): immutable raw
sources → an LLM-maintained, cross-linked wiki → a schema that delegates the
bookkeeping to agents. See `CLAUDE.md §2`.

## Status
🚧 Active build. See `meta/research-log.md` for what's been ingested and
`meta/punchlist.md` for open decisions.

## Conventions in one line
Markdown + YAML frontmatter + `[[wikilinks]]` + `#tags`. Every contestable
claim cites a `[[src-...]]` note. South African lens first; global as benchmark.

## Open it in Obsidian
Point Obsidian at this repo root as the vault folder. Wikilinks, tags and graph
view work out of the box. (No proprietary plugins required.)

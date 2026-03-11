# Agents Authority Docs

> **v1.0 · Alpha** — APIs and features may change before general availability.

Documentation for the [Agents Authority](https://agentsauthority.com) platform — commerce infrastructure for AI agents.

**[docs.agentsauthority.com](https://docs.agentsauthority.com)**

---

## Found something wrong?

[Open a bug report →](https://github.com/Agents-Authority/docs/issues/new?template=bug_report.yml)
[Suggest an improvement →](https://github.com/Agents-Authority/docs/issues/new?template=doc_improvement.yml)

---

## Contributing

All docs live in `content/docs/` as MDX files.

**1. Fork and run locally**

```bash
bun install
bun run dev      # http://localhost:3007
```

**2. Edit or add content**

Docs are in `content/docs/` organized by topic:

```
content/docs/
├── index.mdx                 # Introduction
├── mcp/                      # MCP Server — 42 tools across 9 domains
│   ├── overview.mdx
│   ├── quickstart.mdx
│   ├── authentication.mdx
│   └── tools/                # Per-domain tool reference
└── plugins/
    └── woocommerce/          # WooCommerce plugin guide
```

**3. Open a pull request**

Keep PRs focused — one fix or addition per PR makes review faster.

### What belongs in a PR

- Fixing errors, broken links, or outdated information
- Improving or adding code examples
- Clarifying confusing steps
- Adding missing content for existing features

### What doesn't belong

- Internal implementation details (class names, file paths, payload schemas users never see)
- Features not yet publicly available
- Content that duplicates what's already there

### Doc style

Write for **outcomes, not implementation**. Describe what the user achieves, not what the code does internally.

Good: _"Connect your store to start accepting agent-initiated orders"_
Bad: _"Calls `aa_register_ucp_profile()` which writes to `wp_options`"_

---

## Releases and changelog

This repo uses [Conventional Commits](https://www.conventionalcommits.org) and [release-please](https://github.com/googleapis/release-please) for automated versioning.

When commits land on `main`, release-please opens a PR bumping the version and updating `CHANGELOG.md`. Merging that PR cuts a GitHub Release.

**Commit prefixes used here:**

| Prefix | When to use |
|--------|-------------|
| `fix:` | Corrects wrong or broken content |
| `feat:` | Adds new documentation |
| `docs:` | Changes to README, contributing guide, etc. |
| `chore:` | Dependency updates, tooling |

See [CHANGELOG.md](./CHANGELOG.md) for version history.

---

## Running locally

```bash
bun install
bun run dev      # http://localhost:3007
bun run build    # verify production build passes
```

Requires Bun ≥ 1.0. Node.js also works with `npm install`.
# docs
# docs

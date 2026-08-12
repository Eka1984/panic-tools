# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Just Breathe** (`panic-tools`) — a small React SPA that helps calm panic attacks via guided breathing and grounding exercises. Live at https://panic-tools.vercel.app/.

The product context shapes engineering decisions: the app is meant to be used during acute stress, so UI changes should preserve calm, minimal, distraction-free interaction. It is explicitly *not* a medical device.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — TypeScript project build (`tsc -b`) followed by `vite build`. **This is the only "typecheck" step** — there is no separate `typecheck` script, so run `npm run build` to verify types.
- `npm run lint` — ESLint over the whole repo (flat config in `eslint.config.js`)
- `npm run preview` — preview the production build locally

There is no test runner configured. `npm test` is not defined; CI runs `npm test --if-present` and skips. Don't fabricate test commands.

## Commit & release flow

- Husky runs `commitlint` on `commit-msg` using `@commitlint/config-conventional`. Commits **must** follow Conventional Commits (`feat:`, `fix:`, `chore:`, `style(scope):`, etc.) or the hook will reject them.
- `main` is released by `semantic-release` (see `.releaserc.json` — only `commit-analyzer`, `release-notes-generator`, and `github` plugins; no changelog or git plugins, so don't expect `CHANGELOG.md` to be updated by release).
- CI (`.github/workflows/ci.yml`) on PRs runs commitlint over the PR commit range, then `npm run lint`, then `npm run build`. The release workflow additionally deploys to Vercel on push to `main`.
- Node version pinned in CI: **22.12.0**.

## Architecture

Single-page React 19 + TypeScript app, routed with `react-router-dom` v7, animated with `framer-motion`.

**Entry & routing**
- `src/main.tsx` mounts `<App />` inside `<BrowserRouter>` and imports the two global stylesheets (`styles/global.css`, `styles/variables.css`).
- `src/App.tsx` is the route table. Routes: `/` → Breathing, `/grounding` → Grounding, `/done` → Done, `*` → NotFound. Page transitions use `<AnimatePresence mode="wait">` keyed on `location.pathname`; individual pages opt in by wrapping their root in a `motion.div` with the standard opacity fade (see `pages/Breathing/Breathing.tsx` and `pages/Grounding.tsx` for the pattern to copy when adding pages).
- `<Header />`, `<ScrollToTop />`, and `<PageContainer />` wrap every route — page components render only their inner content.

**Grounding state machine**
The 5-4-3-2-1 grounding exercise is a small finite state machine, deliberately kept in one place:
- `src/components/groundingReducer.ts` — `screen: "intro" | "step" | "done"` plus `activeIndex: 0..4`. Actions: `BEGIN`, `NEXT`, `RESET`, `RESTART`. `NEXT` advances index and transitions to `done` at index 5.
- `src/components/groundingSteps.tsx` — the five steps (see/touch/hear/smell/taste) with icons, prompts, and examples.
- `src/components/GroundingChecklist/GroundingChecklist.tsx` — the only consumer; uses `useReducer` and renders one of three screens.

When changing grounding flow, update the reducer and the consumer together; don't add parallel state.

**Styling system**
- **CSS Modules** (`*.module.css`) per component, co-located next to the `.tsx`.
- Three global stylesheets: `styles/variables.css` (design tokens — colors, `--header-height`, gradients), `styles/global.css` (resets/base), `styles/app.css` (app shell).
- Always reference design tokens via CSS custom properties from `variables.css` rather than hardcoding colors. Mobile-first; recent work (branch `ui/responsiveness`) uses `100dvh` to avoid mobile viewport gaps.

**Icons** come from `react-icons` (mostly `fi` Feather, some `pi` Phosphor, `vsc` for restart). Match the existing convention rather than introducing a new icon library.

## Conventions to preserve

- Page components live in `src/pages/<Name>/<Name>.tsx` with a sibling `.module.css` (Grounding is the exception — flat `Grounding.tsx`).
- TS config is strict with `noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly` — prefer `import type` for types and don't leave unused symbols (the build will fail).
- Don't add a test framework, changelog tooling, or formatter unless explicitly asked — the toolchain is intentionally minimal.

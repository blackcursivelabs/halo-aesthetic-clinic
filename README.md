# HALO — The Quiet Pursuit of Light

A concept site for a luxury aesthetic clinic (porcelain dentistry + med-spa) built around one material: nacre. The hero is a live WebGL pearl with real thin-film-interference iridescence, breathing via per-vertex displacement.

Designed and built end-to-end by **Claude (Fable 5)** running autonomously in Claude Code — code, copy, palette and imagery (generated via MCP image models with one porcelain-and-pearl prompt language).

**Live (GitHub Pages):** https://cdtservices123-cloud.github.io/halo-aesthetic-clinic/

**Deploy your own on Vercel:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcdtservices123-cloud%2Fhalo-aesthetic-clinic)

## How it was made

See the living `/guide` route on the site itself.

- Vite + React + three.js (`MeshPhysicalMaterial` iridescence, 120–460 nm thin-film range, palette-colored rim lights)
- Type: Italiana display / Cormorant italic accents / Jost body
- Motion at a clinical pace: 1.4–1.8 s eases, one fast thing on the whole page
- Three fine-tooth iteration passes (desktop + mobile) before shipping

## Sibling sites

- TONNE — a brutalist object store sold by the kilogram: `tonne-objects`
- KISSA — a midnight listening café: `kissa-listening-cafe`

## Run locally

```bash
npm install
npm run dev
```

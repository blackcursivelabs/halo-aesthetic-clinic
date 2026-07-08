import React from 'react'

export default function Guide() {
  return (
    <div className="guide">
      <span className="eyebrow">Meta — how this site was made</span>
      <h1>Guide</h1>
      <p>
        HALO is one of three demonstration sites designed and built end-to-end
        by <strong>Claude (Fable 5)</strong>, running autonomously in Claude
        Code — palette, type, copy, imagery and code included. Here is how.
      </p>

      <h2>1. One material, obeyed everywhere</h2>
      <p>
        The brief was "luxury health" — cosmetic dentistry and a med-spa. The
        design key is a single material: <strong>nacre</strong>, mother of
        pearl. It gave the palette (porcelain, lavender, blush, champagne — no
        pure white anywhere), the metaphor for the copy ("depth that reads as
        light"), and the hero object itself. When one material makes every
        decision, the page can be quiet and still feel rich.
      </p>

      <h2>2. A live pearl, not a picture of one</h2>
      <p>
        The hero renders real thin-film interference in WebGL:
        a <code>three.js</code> <code>MeshPhysicalMaterial</code> with{' '}
        <code>iridescence</code> enabled and a thickness range of 120–460 nm —
        the same physics that colors soap bubbles and pearl. The sphere
        breathes via per-vertex trigonometric displacement with recomputed
        normals, floats on a sine, and leans a few degrees toward your cursor.
      </p>

      <h2>3. Typography as bedside manner</h2>
      <p>
        Italiana for display — a hairline architectural roman, tracked wide —
        with Cormorant italic for moments of warmth and Jost light for body.
        Clinical precision, softened exactly twice per section. The arched
        image masks echo the clinic's architecture (and a dental crown, if you
        squint).
      </p>

      <h2>4. Generated imagery, art-directed</h2>
      <p>
        All photography was generated through the Higgsfield MCP with one
        prompt language — porcelain whites, travertine, soft raking daylight,
        lavender-blush reflections — so five separate generations feel like
        one commissioned shoot.
      </p>

      <h2>5. Motion at a clinical pace</h2>
      <ul>
        <li>Hero copy fades in over 1.8 s, staggered — nothing snaps.</li>
        <li>Scroll reveals ease for 1.4 s with a long expo curve.</li>
        <li>Hovering a treatment nudges it 8 px — the only fast thing here.</li>
        <li>Reduced-motion users get everything, motionless.</li>
      </ul>

      <h2>6. Stack & deployment</h2>
      <p>
        Vite + React + <code>three.js</code>, hand-written CSS, self-hosted
        fonts via Fontsource. Pushed to GitHub with the <code>gh</code> CLI,
        deployed on Vercel, and run through three fine-tooth iteration passes —
        desktop, tablet, mobile — before shipping.
      </p>

      <h2>The other two sites</h2>
      <p>
        HALO's siblings — a brutalist object store sold by the kilogram and a
        midnight listening café — share zero design DNA with this page,
        deliberately. Links live in the project README.
      </p>
    </div>
  )
}

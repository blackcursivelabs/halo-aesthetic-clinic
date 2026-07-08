import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pearl from '../components/Pearl.jsx'

const B = import.meta.env.BASE_URL

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rise')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const SMILE = [
  ['Porcelain veneers', '90 min'],
  ['Enamel sculpting', '60 min'],
  ['Whitening, gradual', '3 visits'],
  ['Invisible alignment', '9–14 mo'],
]
const SKIN = [
  ['Light therapy facial', '50 min'],
  ['Polynucleotide renewal', '40 min'],
  ['Micro-needling, gentle', '60 min'],
  ['Chemical peel, mild', '45 min'],
]
const STILLNESS = [
  ['Flotation rest', '60 min'],
  ['Lymphatic massage', '75 min'],
  ['Thermal circuit', '90 min'],
  ['Breathwork, guided', '45 min'],
]

export default function Home() {
  useReveal()
  const [sent, setSent] = useState(false)

  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <span className="eyebrow">Halo — Aesthetic Clinic · Smile · Skin · Stillness</span>
          <h1>
            The quiet
            <br />
            pursuit <span className="accent-i">of light.</span>
          </h1>
          <p className="hero__sub">
            Porcelain dentistry, considered skin treatments and unhurried rest —
            planned around how light moves across a face, not trends.
          </p>
          <div className="hero__cta">
            <a href="#consult" className="btn-pearl">Begin with a consultation</a>
            <a href="#treatments" className="ghost">See treatments</a>
          </div>
        </div>
        <div className="hero__stage">
          <div className="hero__shadow" />
          <Pearl />
          <div className="hero__note">
            Nacre, rendered live
            <br />
            thin-film interference
          </div>
        </div>
      </section>

      <section className="philo">
        <div className="philo__img rise">
          <img src={B + 'img/nacre.webp'} alt="Mother-of-pearl surface with lavender and champagne reflections" loading="lazy" />
        </div>
        <div className="philo__text rise">
          <span className="eyebrow">Why the pearl</span>
          <h2>
            Nothing in nature is
            <br />
            <span className="accent-i">pure white.</span>
          </h2>
          <p>
            A pearl is layers — thousands of them — each translucent, each
            catching a slightly different wavelength. That is our standard for
            a veneer, for skin, for the whole experience of being here: depth
            that reads as light, never as surface.
          </p>
          <p>
            Every treatment plan begins with study — of your features, your
            habits, the way you actually live — and proceeds slowly, in layers.
          </p>
          <p className="philo__sig">— Dr. Amara Chen, founding clinician</p>
        </div>
      </section>

      <section className="treat" id="treatments">
        <div className="treat__head rise">
          <span className="eyebrow">Treatments</span>
          <h2>
            A menu measured <span className="accent-i">in light</span>
          </h2>
        </div>
        <div className="treat__cols">
          <div className="tcol rise">
            <div className="tcol__img">
              <img src={B + 'img/veneer.webp'} alt="A porcelain veneer beside a pearl on white onyx" loading="lazy" />
            </div>
            <h3>Smile</h3>
            <p className="tcol__tag">Porcelain, placed like nacre</p>
            <ul>
              {SMILE.map(([name, dur]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span>{dur}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="tcol rise">
            <div className="tcol__img">
              <img src={B + 'img/portrait.webp'} alt="A face turned into soft pearlescent light" loading="lazy" />
            </div>
            <h3>Skin</h3>
            <p className="tcol__tag">Renewal without erasure</p>
            <ul>
              {SKIN.map(([name, dur]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span>{dur}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="tcol rise">
            <div className="tcol__img">
              <img src={B + 'img/room.webp'} alt="A treatment room in ivory linen and curved plaster" loading="lazy" />
            </div>
            <h3>Stillness</h3>
            <p className="tcol__tag">The treatment between treatments</p>
            <ul>
              {STILLNESS.map(([name, dur]) => (
                <li key={name}>
                  <span>{name}</span>
                  <span>{dur}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="practice" id="practice">
        <img className="practice__bg" src={B + 'img/clinic.webp'} alt="The clinic: curved porcelain walls, travertine floor, morning light" loading="lazy" />
        <div className="practice__panel">
          <h2 className="rise">Built like a place to exhale</h2>
          <div className="practice__stats rise">
            <div className="pstat">
              <b>4</b>
              <span>Private suites</span>
            </div>
            <div className="pstat">
              <b>90<span style={{ fontSize: '0.5em' }}> min</span></b>
              <span>Median visit</span>
            </div>
            <div className="pstat">
              <b>0</b>
              <span>Waiting-room TVs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="consult" id="consult">
        <span className="eyebrow rise">Consultation</span>
        <h2 className="rise">
          Begin <span className="accent-i">slowly.</span>
        </h2>
        <p className="rise">
          Ninety minutes with a clinician. No plan is proposed on the first
          visit — we look, we listen, we photograph light. The plan comes later,
          in writing, with nothing you didn't ask about.
        </p>
        {sent ? (
          <p className="consult__thanks">
            Thank you. We'll write within two working days.
          </p>
        ) : (
          <form
            className="consult__form rise"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <div className="field">
              <label htmlFor="c-name">Name</label>
              <input id="c-name" name="name" autoComplete="name" required />
            </div>
            <div className="field">
              <label htmlFor="c-email">Email</label>
              <input id="c-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field field--full">
              <label htmlFor="c-interest">What brings you in</label>
              <select id="c-interest" name="interest" defaultValue="">
                <option value="" disabled>
                  Choose, loosely — it can change
                </option>
                <option>Smile — porcelain & alignment</option>
                <option>Skin — renewal & light therapy</option>
                <option>Stillness — rest & recovery</option>
                <option>Not sure yet</option>
              </select>
            </div>
            <button type="submit" className="btn-pearl consult__submit">
              Request a consultation
            </button>
          </form>
        )}
        <p className="consult__note">
          This is a concept site — the form doesn't send anything anywhere.
        </p>
      </section>

      <footer className="footer">
        <div className="footer__grid">
          <div className="footer__col">
            <span className="eyebrow">Visit</span>
            <span>Suite 2, The Arches</span>
            <span>18 Lumen Street</span>
          </div>
          <div className="footer__col">
            <span className="eyebrow">Hours</span>
            <span>Tue — Sat, 09:00 — 18:00</span>
            <span>Consultations by appointment</span>
          </div>
          <div className="footer__col">
            <span className="eyebrow">Meta</span>
            <Link to="/guide">How this site was made</Link>
            <span>Designed & built by Claude (Fable 5)</span>
          </div>
        </div>
        <div className="footer__big" aria-hidden="true">
          HALO
        </div>
        <div className="footer__base">
          <span>© 2026 Halo Aesthetic Clinic — a concept</span>
          <span>Smile · Skin · Stillness</span>
        </div>
      </footer>
    </>
  )
}

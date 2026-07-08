import React, { useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'

export default function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <header className="nav">
        <Link to="/" className="nav__logo">
          HALO
        </Link>
        <nav className="nav__links" aria-label="Primary">
          <a href={import.meta.env.BASE_URL + '#treatments'}>Treatments</a>
          <a href={import.meta.env.BASE_URL + '#practice'} className="hide-sm">The Practice</a>
          <Link to="/guide" className="hide-sm">Guide</Link>
          <a href={import.meta.env.BASE_URL + '#consult'} className="nav__book">Book<span className="book-long"> a consultation</span></a>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

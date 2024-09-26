import { NavLink, Outlet } from 'react-router-dom'

import '../pages/HighScores.css'
import Symbols from '../../UI/Symbols'
import Footer from '../../UI/Footer'

export default function HighScoresNavigation() {
  return (
    <div className="content-container-large">
      <h1 className="high-scores-heading">High scores</h1>
      <Symbols size="small" />
      <nav
        className="high-scores-navigation-container"
        aria-label="high score navigation"
      >
        <h3 className="high-scores-navigation-heading">Difficulty:</h3>
        <ul className="high-scores-navigation-links-container">
          <li>
            <NavLink
              to="/high-scores/easy"
              preventScrollReset
              className={({ isActive }) =>
                isActive
                  ? 'high-scores-navigation-link active-high-scores'
                  : 'high-scores-navigation-link'
              }
            >
              Easy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/high-scores/medium"
              preventScrollReset
              className={({ isActive }) =>
                isActive
                  ? 'high-scores-navigation-link active-high-scores'
                  : 'high-scores-navigation-link'
              }
            >
              Medium
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/high-scores/hard"
              preventScrollReset
              className={({ isActive }) =>
                isActive
                  ? 'high-scores-navigation-link active-high-scores'
                  : 'high-scores-navigation-link'
              }
            >
              Hard
            </NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

import { NavLink, Outlet } from 'react-router-dom'

import '../pages/HighScores.css'
import Footer from '../../UI/Footer'

export default function HighScoresNavigation() {
  return (
    <div className="content-container-large">
      <h1 className="high-scores-heading">High scores</h1>
      <nav className="high-scores-navigation-container">
        <h3 className="high-scores-navigation-heading">Difficulty:</h3>
        <ul className="high-scores-navigation-links-container">
          <li>
            <NavLink
              to="/high-scores/easy"
              className={({ isActive }) =>
                isActive
                  ? 'high-scores-navigation-link active'
                  : 'high-scores-navigation-link'
              }
            >
              Easy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/high-scores/medium"
              className={({ isActive }) =>
                isActive
                  ? 'high-scores-navigation-link active'
                  : 'high-scores-navigation-link'
              }
            >
              Medium
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/high-scores/hard"
              className={({ isActive }) =>
                isActive
                  ? 'high-scores-navigation-link active'
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

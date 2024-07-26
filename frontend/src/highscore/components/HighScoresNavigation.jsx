import { NavLink, Outlet } from 'react-router-dom'

export default function HighScoresNavigation() {
  return (
    <>
      <h2>Difficulty</h2>
      <nav>
        <ul className="nav-container">
          <li>
            <NavLink
              to="/high-scores/easy"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Easy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/high-scores/medium"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Medium
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/high-scores/hard"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
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
    </>
  )
}

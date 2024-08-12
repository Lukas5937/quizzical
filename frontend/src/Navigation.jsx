import { NavLink, Outlet, ScrollRestoration } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <>
      <nav>
        <ul className="navigation-container">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'navigation-link active' : 'navigation-link'
              }
              end
            >
              Quizzical
            </NavLink>
          </li>
          <li>
            <NavLink
              to="quiz/settings"
              className={({ isActive }) =>
                isActive ? 'navigation-link active' : 'navigation-link'
              }
            >
              Start Quiz
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/high-scores"
              className={({ isActive }) =>
                isActive ? 'navigation-link active' : 'navigation-link'
              }
            >
              High Scores
            </NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  )
}

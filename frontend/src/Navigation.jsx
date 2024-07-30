import { NavLink, Outlet } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  return (
    <>
      <nav>
        <ul className="nav-container">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              QuizNerds
            </NavLink>
          </li>
          <li>
            <NavLink
              to="quiz/settings"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              Start Quiz
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/high-scores"
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
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
    </>
  )
}

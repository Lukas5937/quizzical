import { NavLink, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <nav>
        <ul className="nav-wrapper">
          <li>
            <NavLink to="/" className="nav-link">
              QuizNerds
            </NavLink>
          </li>
          <li>
            <NavLink to="quiz/settings" className="nav-link">
              Start Quiz
            </NavLink>
          </li>
          <li>
            <NavLink to="" className="nav-link">
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

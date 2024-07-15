import { NavLink, Outlet } from 'react-router-dom'

export default function Navigation() {
  return (
    <>
      <nav>
        <ul className="nav-wrapper">
          <li>
            <NavLink className="nav-link">QuizNerds</NavLink>
          </li>
          <li>
            <NavLink className="nav-link">Start Game</NavLink>
          </li>
          <li>
            <NavLink className="nav-link">High Scores</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

import { Link } from 'react-router-dom'

export default function Button({ children, to, type }) {
  const classes = `link ${type === 'accent' ? 'accent' : ''}`

  return (
    <Link className={classes} to={to}>
      {children}
    </Link>
  )
}

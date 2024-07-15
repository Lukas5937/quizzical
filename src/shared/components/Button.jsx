import { Link } from 'react-router-dom'

export default function Button({ children, path, type }) {
  const classes = `link ${type === 'accent' ? 'accent' : ''}`

  return (
    <Link className={classes} to={path}>
      {children}
    </Link>
  )
}

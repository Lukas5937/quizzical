import { Link } from 'react-router-dom'

export default function Button({ to, accent, ...props }) {
  const cssClasses = `button ${accent ? 'accent' : ''}`

  if (to) {
    return <Link className={cssClasses} to={to} {...props}></Link>
  }

  return <button className={cssClasses} {...props}></button>
}

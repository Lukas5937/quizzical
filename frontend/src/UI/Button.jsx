import { Link } from 'react-router-dom'

export default function Button({ to, accent, size, ...props }) {
  let cssClasses = 'button'

  if (accent) {
    cssClasses += ' accent-button'
  }
  if (size === 'large') {
    cssClasses += ' large-button'
  }

  if (size === 'small') {
    cssClasses += ' small-button'
  }

  if (to) {
    return <Link className={cssClasses} to={to} {...props}></Link>
  }

  return <button className={cssClasses} {...props}></button>
}

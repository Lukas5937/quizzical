import { Link } from 'react-router-dom'

export default function Button({ to, answer, color, size, ...props }) {
  let cssClasses = 'button'

  if (color === 'accent') {
    cssClasses += ' accent-button'
  }

  if (color === 'light') {
    cssClasses += ' light-button'
  }

  if (size === 'small') {
    cssClasses += ' small-button'
  }

  if (to) {
    return <Link className={cssClasses} to={to} {...props}></Link>
  }

  if (answer) {
    cssClasses = `button light-button `
  }

  return <button className={cssClasses} {...props}></button>
}

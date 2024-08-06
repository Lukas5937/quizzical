export default function AnswerButton({
  color,
  selectAnswer,
  children,
  ...props
}) {
  let cssClasses = 'answer-button'

  if (color === 'light') {
    cssClasses += ' light-button'
  }

  if (color === 'green') {
    cssClasses += ' green-button'
  }

  if (color === 'red') {
    cssClasses += ' red-button'
  }

  return (
    <button onClick={selectAnswer} className={cssClasses} {...props}>
      {children}
    </button>
  )
}

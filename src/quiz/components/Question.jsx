export default function Question({ activeQuestion, onSelectAnswer }) {
  const { userAnswer, correctAnswer } = activeQuestion

  function setButtonColor(answer) {
    if (userAnswer && answer === correctAnswer) {
      return 'is-correct'
    }
    if (answer === userAnswer && answer !== correctAnswer) {
      return 'is-incorrect'
    }
    return ''
  }

  const answers = activeQuestion.answers.map((answer) => (
    <li key={answer}>
      <button
        className={`answer-button ${setButtonColor(answer)}`}
        onClick={() => onSelectAnswer(answer)}
      >
        {answer}
      </button>
    </li>
  ))
  return (
    <>
      <h3>{activeQuestion.question}</h3>
      <ul className="answers-container">{answers}</ul>
    </>
  )
}

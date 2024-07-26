export default function Question({
  activeQuestion,
  onSelectAnswer,
  buttonDisabled,
}) {
  const { userAnswer, correct_answer: correctAnswer } = activeQuestion

  function setBackgroundColor(answer) {
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
        className={`button ${setBackgroundColor(answer)}`}
        onClick={() => onSelectAnswer(answer)}
        disabled={buttonDisabled}
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

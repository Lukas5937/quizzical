import { useContext } from 'react'
import { QuestionsContext } from '../../shared/context/QuestionsContext'

export default function QuizResults() {
  const { questions } = useContext(QuestionsContext)

  const amountCorrectAnswers = questions.filter(
    (question) => question.correctAnswer === question.userAnswer
  ).length

  const results = questions.map((item) => {
    return (
      <li key={item.id}>
        <h3>{item.question}</h3>
        {item.userAnswer === item.correctAnswer ? (
          <p>Your answer: {item.userAnswer} ✅</p>
        ) : (
          <>
            <p>Your answer: {item.userAnswer} ❌</p>
            <p>Correct answer: {item.correctAnswer}</p>
          </>
        )}
      </li>
    )
  })

  return (
    <>
      <h2>Your results:</h2>
      <h3>
        {amountCorrectAnswers}/{questions.length} correct answers
      </h3>
      <ul>{results}</ul>
    </>
  )
}

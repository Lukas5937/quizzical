import { useContext } from 'react'
import { QuestionsContext } from '../../shared/context/QuestionsContext'
import { ResultsContext } from '../../shared/context/ResultsContext'
import Button from '../../shared/components/Button'

export default function QuizResults() {
  const { questions } = useContext(QuestionsContext)
  const { gameDuration, numberOfCorrectAnswers, setNumberOfCorrectAnswers } =
    useContext(ResultsContext)

  setNumberOfCorrectAnswers(
    questions.filter(
      (question) => question['correct_answer'] === question.userAnswer
    ).length
  )

  const results = questions.map((question) => {
    return (
      <li key={question.question}>
        <h3>{question.question}</h3>
        {question.userAnswer === question['correct_answer'] ? (
          <p>Your answer: {question.userAnswer} ✅</p>
        ) : (
          <>
            <p>Your answer: {question.userAnswer} ❌</p>
            <p>Correct answer: {question['correct_answer']}</p>
          </>
        )}
      </li>
    )
  })

  return (
    <>
      <h2>Your results:</h2>
      <h3>
        {numberOfCorrectAnswers}/{questions.length} correct answers
      </h3>
      <ul>{results}</ul>
      <Button to="/high-scores" type="accent">
        Watch High Scores
      </Button>
    </>
  )
}

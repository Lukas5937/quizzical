import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { SettingsContext } from '../../shared/context/SettingsContext'
import { QuestionsContext } from '../../shared/context/QuestionsContext'
import { ResultsContext } from '../../shared/context/ResultsContext'
import useQuizResultsFetch from '../hooks/useQuizResultsFetch'
import LoadingSpinner from '../../shared/components/LoadingSpinner'
import ErrorBox from '../../shared/components/ErrorBox'

export default function QuizResults() {
  const { settingsData } = useContext(SettingsContext)
  const { questions } = useContext(QuestionsContext)
  const { numberOfCorrectAnswers } = useContext(ResultsContext)

  numberOfCorrectAnswers.current = questions.filter(
    (question) => question['correct_answer'] === question.userAnswer
  ).length

  const { isLoading, isError, error } = useQuizResultsFetch()

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
      {!isError && !isLoading && (
        <>
          <h2>Your results:</h2>
          <h3>
            {numberOfCorrectAnswers.current}/{questions.length} correct answers
          </h3>
          <ul>{results}</ul>
          <Link
            to={`/high-scores/${settingsData.difficulty}`}
            className="button accent"
          >
            Watch High Scores
          </Link>
        </>
      )}
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorBox error={error} />}
    </>
  )
}

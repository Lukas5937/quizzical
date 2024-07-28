import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { QuestionsContext } from '../../context/QuestionsContext'
import { ResultsContext } from '../../context/ResultsContext'
import useQuizResultsFetch from '../hooks/useQuizResultsFetch'
import useQuizSettingsFetch from '../hooks/useQuizSettingsFetch'
import LoadingSpinner from '../../UI/LoadingSpinner'
import ErrorBox from '../../UI/ErrorBox'

export default function QuizResults() {
  const { questions } = useContext(QuestionsContext)
  const { numberOfCorrectAnswers } = useContext(ResultsContext)

  numberOfCorrectAnswers.current = questions.filter(
    (question) => question['correct_answer'] === question.userAnswer
  ).length

  const {
    isLoading: isLoadingResults,
    isError: isErrorResults,
    error: errorResults,
  } = useQuizResultsFetch()
  const {
    handleSubmit: handleSubmitSettings,
    isPending: isPendingSettings,
    isError: isErrorSettings,
    error: errorSettings,
  } = useQuizSettingsFetch()

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
      {!isErrorResults && !isErrorSettings && !isLoadingResults && (
        <>
          <h2>Your results:</h2>
          <h3>
            {numberOfCorrectAnswers.current}/{questions.length} correct answers
          </h3>
          <ul>{results}</ul>
          <Link onClick={handleSubmitSettings} className="button accent">
            {isPendingSettings ? <LoadingSpinner /> : 'Play again'}
          </Link>
          <Link to={'/quiz/settings'} className="button">
            Change Quiz Settings
          </Link>
          <Link
            to={`/high-scores/${questions[0].difficulty}`}
            className="button"
          >
            Watch High Scores
          </Link>
        </>
      )}
      {isLoadingResults && <LoadingSpinner />}
      {isErrorResults && <ErrorBox error={errorResults} />}
      {isErrorSettings && <ErrorBox error={errorSettings} />}
    </>
  )
}

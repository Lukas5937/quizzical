import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import he from 'he'
import { QuestionsContext } from '../../context/QuestionsContext'
import { ResultsContext } from '../../context/ResultsContext'
import useQuizResultsFetch from '../hooks/useQuizResultsFetch'
import useQuizSettingsFetch from '../hooks/useQuizSettingsFetch'
import Symbols from '../../UI/Symbols'
import Symbol from '../../UI/Symbol'
import Congratulations from '../../assets/Symbols/Congratulations.svg'
import CircularProgress from '@mui/material/CircularProgress'
import ErrorBox from '../../UI/ErrorBox'
import Footer from '../../UI/Footer'

import './QuizResults.css'
import Checked from '../../assets/Results/Checked.svg'
import Crossed from '../../assets/Results/Crossed.svg'

export default function QuizResults() {
  const { questions } = useContext(QuestionsContext)
  const { numberOfCorrectAnswers } = useContext(ResultsContext)
  const [showIntroText, setShowIntroText] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowIntroText(false)
    }, 1500)
  }, [])

  numberOfCorrectAnswers.current = questions.filter(
    (question) => question['correct_answer'] === question.userAnswer
  ).length

  const {
    isNewHighScore,
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

  console.log(isNewHighScore.current)

  const results = questions.map((question) => {
    const isCorrect = question.userAnswer === question['correct_answer']

    return (
      <li key={question.question}>
        <div className="results-container">
          <img
            className="results-icon"
            src={isCorrect ? Checked : Crossed}
            alt={isCorrect ? 'Check mark' : 'Cross mark'}
          />
          <div className="results-question-container">
            <p className="results-question">{he.decode(question.question)}</p>
            {isCorrect ? (
              <div className="results-answers-container">
                <p className="results-answer bold-text">Your answer: </p>
                <p className="results-answer">
                  {he.decode(question.userAnswer)}
                </p>
              </div>
            ) : (
              <div className="results-answers-container">
                <p className="results-answer bold-text">Your answer: </p>
                <p className="results-answer">
                  {he.decode(question.userAnswer)}
                </p>
                <p className="results-answer bold-text">Correct answer: </p>
                <p className="results-answer">
                  {he.decode(question['correct_answer'])}
                </p>
              </div>
            )}
          </div>
        </div>
      </li>
    )
  })

  return (
    <div className="content-container-large">
      <section className="quiz-results-section">
        {showIntroText && <h2>You completed the Quiz!</h2>}
        {!showIntroText &&
          !isErrorResults &&
          !isErrorSettings &&
          !isLoadingResults && (
            <>
              <h1>Your results</h1>
              <Symbols size="small" />
              {isNewHighScore.current && (
                <div className="congratulations-container">
                  <p className="congratulations-text">
                    {' '}
                    Congratulations! You created a new high score!
                  </p>
                  <Symbol image={Congratulations} size="large" alt="Trophy" />
                </div>
              )}
              <p className="large-paragraph">
                {numberOfCorrectAnswers.current}/{questions.length} correct
                answers
              </p>

              <ul>{results}</ul>
              <div className="results-buttons-container">
                <Link
                  onClick={handleSubmitSettings}
                  className="button accent-button"
                >
                  {isPendingSettings ? (
                    <CircularProgress className="circular-progress" />
                  ) : (
                    'Play again'
                  )}
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
              </div>
            </>
          )}
      </section>
      {!showIntroText && !isErrorResults && !isErrorSettings && <Footer />}
      {isLoadingResults && <CircularProgress className="circular-progress" />}
      {isErrorResults && <ErrorBox error={errorResults} />}
      {isErrorSettings && <ErrorBox error={errorSettings} />}
    </div>
  )
}

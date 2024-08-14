import { useContext, useEffect, useState } from 'react'
import he from 'he'
import { motion, AnimatePresence } from 'framer-motion'

import { QuestionsContext } from '../../context/QuestionsContext'
import { ResultsContext } from '../../context/ResultsContext'
import useQuizResultsFetch from '../hooks/useQuizResultsFetch'
import useQuizSettingsFetch from '../hooks/useQuizSettingsFetch'
import Symbols from '../../UI/Symbols'
import Symbol from '../../UI/Symbol'
import Congratulations from '../../assets/Symbols/Congratulations.svg'
import CircularProgress from '@mui/material/CircularProgress'
import ErrorBox from '../../UI/ErrorBox'
import Button from '../../UI/Button'
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

  const results = questions.map((question) => {
    const isCorrect = question.userAnswer === question['correct_answer']
    return (
      <li key={question.question}>
        <div className="result-container">
          <img
            className="result-icon"
            src={isCorrect ? Checked : Crossed}
            alt={isCorrect ? 'Check mark' : 'Cross mark'}
          />
          <div className="result-question-container">
            <p className="result-question">{he.decode(question.question)}</p>
            {isCorrect ? (
              <div className="result-answers-container">
                <p className="result-answer bold-text">Your answer: </p>
                <p className="result-answer">
                  {he.decode(question.userAnswer)}
                </p>
              </div>
            ) : (
              <>
                <div className="result-answers-container">
                  <p className="results-answer bold-text">Your answer: </p>
                  <p className="results-answer">
                    {he.decode(question.userAnswer)}
                  </p>
                  <p className="results-answer bold-text">Correct answer: </p>
                  <p className="results-answer">
                    {he.decode(question['correct_answer'])}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </li>
    )
  })

  return (
    <div className="content-container-large">
      <section className="quiz-results-section">
        <AnimatePresence>
          {showIntroText && (
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, type: 'tween' }}
            >
              You completed the Quiz!
            </motion.h2>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {!showIntroText &&
            !isErrorResults &&
            !isErrorSettings &&
            !isLoadingResults && (
              <motion.div
                className="quiz-results-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.2, type: 'tween' }}
              >
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

                <ul className="results-container">{results}</ul>
                <div className="results-buttons-container">
                  <Button
                    onClick={handleSubmitSettings}
                    className="button accent-button"
                  >
                    {isPendingSettings ? (
                      <CircularProgress className="circular-progress" />
                    ) : (
                      'Play again'
                    )}
                  </Button>
                  <Button to={'/quiz/settings'} className="button">
                    Change Quiz Settings
                  </Button>
                  <Button
                    to={`/high-scores/${questions[0].difficulty}`}
                    className="button"
                  >
                    Watch High Scores
                  </Button>
                </div>
              </motion.div>
            )}
        </AnimatePresence>
      </section>
      {!showIntroText && !isErrorResults && !isErrorSettings && <Footer />}
      {isLoadingResults && <CircularProgress className="circular-progress" />}
      {isErrorResults && <ErrorBox error={errorResults} />}
      {isErrorSettings && <ErrorBox error={errorSettings} />}
    </div>
  )
}

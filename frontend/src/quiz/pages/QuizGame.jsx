import { useState, useContext, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuestionsContext } from '../../context/QuestionsContext'
import { ResultsContext } from '../../context/ResultsContext'
import Question from '../components/Question'

import './QuizGame.css'

export default function QuizGame() {
  const { questions, setQuestions } = useContext(QuestionsContext)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [timer, setTimer] = useState(15)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const { gameDuration } = useContext(ResultsContext)
  const navigate = useNavigate()

  const quizIsCompleted = activeQuestionIndex === questions.length
  const activeQuestion = !quizIsCompleted && questions[activeQuestionIndex]

  const addUserAnswerToQuestions = useCallback(
    (answer) => {
      const newQuestions = questions.map((question) =>
        question === activeQuestion
          ? { ...question, userAnswer: answer }
          : question
      )
      setQuestions(newQuestions)
    },
    [questions, activeQuestion, setQuestions]
  )

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setButtonDisabled(true)
      addUserAnswerToQuestions(selectedAnswer)
      setTimeout(() => {
        setActiveQuestionIndex((prevIndex) => prevIndex + 1)
        setButtonDisabled(false)
        setTimer(15)
      }, 2000)
    },
    [addUserAnswerToQuestions]
  )

  useEffect(() => {
    if (!quizIsCompleted) {
      const interval = setInterval(() => {
        gameDuration.current = gameDuration.current + 1
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [quizIsCompleted, gameDuration])

  useEffect(() => {
    if (quizIsCompleted || activeQuestion.userAnswer) return

    if (timer === 0) {
      handleSelectAnswer('No answer selected')
    }
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [handleSelectAnswer, quizIsCompleted, timer, activeQuestion])

  useEffect(() => {
    if (quizIsCompleted) {
      navigate('/quiz/results')
    }
  }, [quizIsCompleted, navigate])

  return (
    <div className="content-container-large">
      <section className="quiz-game-section">
        <h1>Quiz Game</h1>
        <p className="large-paragraph">You have {timer} seconds left.</p>
        {activeQuestion && (
          <Question
            activeQuestion={activeQuestion}
            onSelectAnswer={handleSelectAnswer}
            buttonDisabled={buttonDisabled}
          />
        )}
      </section>
    </div>
  )
}

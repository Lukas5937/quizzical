import { useState, useContext, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { QuestionsContext } from '../../shared/context/QuestionsContext'
import { ResultsContext } from '../../shared/context/ResultsContext'
import Question from '../components/Question'

export default function QuizGame() {
  const { questions, setQuestions } = useContext(QuestionsContext)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [timer, setTimer] = useState(5)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const { gameDuration } = useContext(ResultsContext)

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
        setTimer(5)
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

  if (quizIsCompleted)
    return (
      <>
        <h2>Quiz is completed!</h2>
        <h3>{gameDuration.current}</h3>
        <Link to="/quiz/results" className="button accent">
          See results
        </Link>{' '}
      </>
    )

  return (
    <>
      <h2>Quiz Game</h2>
      <p>You have {timer} seconds left.</p>
      <Question
        activeQuestion={activeQuestion}
        onSelectAnswer={handleSelectAnswer}
        buttonDisabled={buttonDisabled}
      />
    </>
  )
}

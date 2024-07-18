import { useState, useContext, useEffect, useCallback } from 'react'
import { QuestionsContext } from '../../shared/context/QuestionsContext'
import Question from '../components/Question'
import Button from '../../shared/components/Button'

export default function QuizGame() {
  const { questions, setQuestions } = useContext(QuestionsContext)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [timer, setTimer] = useState(5)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const activeQuestion = questions[activeQuestionIndex]

  const addUserAnswerToQuestions = useCallback(
    (answer) => {
      const newQuestion = questions.map((question) =>
        question === activeQuestion
          ? { ...question, userAnswer: answer }
          : question
      )
      setQuestions(newQuestion)
    },
    [questions, activeQuestion, setQuestions]
  )

  function handleSelectAnswer(selectedAnswer) {
    setButtonDisabled(true)
    addUserAnswerToQuestions(selectedAnswer)
    setTimeout(() => {
      setActiveQuestionIndex((prevIndex) => prevIndex + 1)
      setButtonDisabled(false)
      setTimer(5)
    }, 2000)
  }

  const quizIsCompleted = activeQuestionIndex === questions.length

  useEffect(() => {
    if (timer === 0 && !quizIsCompleted) {
      addUserAnswerToQuestions('skipped')
      setActiveQuestionIndex((prevIndex) => prevIndex + 1)
      setTimer(5)
      return
    }
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [addUserAnswerToQuestions, quizIsCompleted, timer])

  console.log(questions)

  if (quizIsCompleted)
    return (
      <>
        <h2>Quiz is completed!</h2>
        <Button to="/quiz/results">See results</Button>{' '}
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

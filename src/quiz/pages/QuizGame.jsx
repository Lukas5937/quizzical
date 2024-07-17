import { useState, useContext } from 'react'
import { QuestionsContext } from '../../shared/context/QuestionsContext'
import Question from '../components/Question'
import Button from '../../shared/components/Button'

export default function QuizGame() {
  const { questions, setQuestions } = useContext(QuestionsContext)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  const activeQuestion = questions[activeQuestionIndex]

  function addUserAnswerToQuestions(answer) {
    const newQuestion = questions.map((question) =>
      question === activeQuestion
        ? { ...question, userAnswer: answer }
        : question
    )
    setQuestions(newQuestion)
  }

  function handleSelectAnswer(selectedAnswer) {
    setButtonDisabled(true)
    addUserAnswerToQuestions(selectedAnswer)
    setTimeout(() => {
      setActiveQuestionIndex((prevIndex) => prevIndex + 1)
      setButtonDisabled(false)
    }, 2000)
  }

  const quizIsCompleted = activeQuestionIndex === questions.length
  if (quizIsCompleted)
    return (
      <>
        <h2>Quiz is completed!</h2>
        <Button to="/quiz/results">See results</Button>
      </>
    )

  return (
    <>
      <h2>Quiz Game</h2>
      <Question
        activeQuestion={activeQuestion}
        onSelectAnswer={handleSelectAnswer}
        buttonDisabled={buttonDisabled}
      />
    </>
  )
}

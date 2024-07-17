import { useState, useContext } from 'react'
import { QuestionsContext } from '../../shared/context/QuestionsContext'
import Question from '../components/Question'

export default function QuizGame() {
  const { questions, setQuestions } = useContext(QuestionsContext)
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)

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
    addUserAnswerToQuestions(selectedAnswer)
    setTimeout(() => {
      setActiveQuestionIndex((prevIndex) => prevIndex + 1)
    }, 2000)
  }

  console.log(questions)

  const quizIsCompleted = activeQuestionIndex === questions.length
  if (quizIsCompleted) return <h2>Quiz is completed!</h2>

  return (
    <>
      <h2>Quiz Game</h2>
      <Question
        activeQuestion={activeQuestion}
        onSelectAnswer={handleSelectAnswer}
      />
    </>
  )
}

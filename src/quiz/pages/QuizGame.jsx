import { useState, useContext } from 'react'
import { QuestionsContext } from '../../shared/context/QuestionsContext'

export default function QuizGame() {
  const { questions, setQuestions } = useContext(QuestionsContext)
  const [userAnswers, setUserAnswers] = useState([])

  const activeQuestionIndex = userAnswers.length
  const activeQuestion = questions[activeQuestionIndex]

  function addAnswerToQuestions(answer) {
    const newQuestion = questions.map((question) =>
      question === activeQuestion
        ? { ...question, userAnswer: answer }
        : question
    )
    setQuestions(newQuestion)
  }

  let styles = { backgroundColor: '#72a657' }

  function handleSelectAnswer(selectedAnswer) {
    setTimeout(() => (styles = { backgroundColor: '#72a657' }), 1000)
    setTimeout(() => {
      setUserAnswers((preUserAnswers) => [...preUserAnswers, selectedAnswer])
      addAnswerToQuestions(selectedAnswer)
    }, 2000)
  }

  const quizIsCompleted = activeQuestionIndex === questions.length
  if (quizIsCompleted) return <h2>Quiz is completed!</h2>

  const answers = activeQuestion.answers.map((answer) => (
    <li key={answer}>
      <button
        className="answer-button"
        style={answer === activeQuestion.correctAnswer ? styles : null}
        onClick={() => handleSelectAnswer(answer)}
      >
        {answer}
      </button>
    </li>
  ))

  return (
    <>
      <h2>Quiz Game</h2>
      <h3>{activeQuestion.question}</h3>
      <ul className="answers-container">{answers}</ul>
    </>
  )
}

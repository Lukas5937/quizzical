import he from 'he'
import { motion } from 'framer-motion'
import AnswerButton from './AnswerButton'

export default function Question({
  activeQuestion,
  onSelectAnswer,
  buttonDisabled,
}) {
  const { userAnswer, correct_answer: correctAnswer } = activeQuestion

  function setBackgroundColor(answer) {
    if (userAnswer && answer === correctAnswer) {
      return 'green'
    }
    if (answer === userAnswer && answer !== correctAnswer) {
      return 'red'
    }
    return 'light'
  }

  const answers = activeQuestion.answers.map((answer) => (
    <li key={answer}>
      <AnswerButton
        color={setBackgroundColor(answer)}
        selectAnswer={() => onSelectAnswer(answer)}
        disabled={buttonDisabled}
      >
        {he.decode(answer)}
      </AnswerButton>
    </li>
  ))
  return (
    <motion.div
      key={activeQuestion.question}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, type: 'tween' }}
    >
      <h3 className="question-text">{he.decode(activeQuestion.question)}</h3>
      <ul className="answers-container">{answers}</ul>
    </motion.div>
  )
}

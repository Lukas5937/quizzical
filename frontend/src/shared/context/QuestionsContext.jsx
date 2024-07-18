import { createContext, useState } from 'react'

const DUMMY_QUESTIONS = [
  {
    id: 1,
    question:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    answers: ['Lorem', 'Borem', 'Corem', 'Dorem'],
    correctAnswer: 'Borem',
  },
  {
    id: 2,
    question: 'Question 2.',
    answers: ['lala', 'lola', 'lila', 'lela'],
    correctAnswer: 'lila',
  },
  {
    id: 3,
    question: 'Question 3',
    answers: ['uurruu', 'oorruu', 'iirruu', 'aarruu'],
    correctAnswer: 'oorruu',
  },
]

export const QuestionsContext = createContext()

export default function QuestionsContextProvider({ children }) {
  const [questions, setQuestions] = useState(DUMMY_QUESTIONS)

  const value = { questions, setQuestions }
  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  )
}

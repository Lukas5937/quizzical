import { createContext, useState } from 'react'

const DUMMY_QUESTIONS = [
  {
    id: 1,
    question:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    incorrect_answers: ['Lorem', 'Corem', 'Dorem'],
    correct_answer: 'Borem',
  },
  {
    id: 2,
    question: 'Question 2.',
    incorrect_answers: ['lala', 'lola', 'lela'],
    correct_answer: 'lila',
  },
  {
    id: 3,
    question: 'Question 3',
    incorrect_answers: ['uurruu', 'iirruu', 'aarruu'],
    correct_answer: 'oorruu',
  },
]

export const QuestionsContext = createContext()

export default function QuestionsContextProvider({ children }) {
  const [questions, setQuestions] = useState(DUMMY_QUESTIONS)

  // function formatQuestions() {
  //   setQuestions((prevQuestions) => {
  //     return prevQuestions.map((question) => {
  //       const sortedAnswers = [
  //         ...question.incorrect_answers,
  //         question.correct_answer,
  //       ]
  //       const answers = shuffleArray(sortedAnswers)
  //       return { ...question, answers }
  //     })
  //   })
  // }

  const value = { questions, setQuestions }
  return (
    <QuestionsContext.Provider value={value}>
      {children}
    </QuestionsContext.Provider>
  )
}

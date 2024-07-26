import { createContext, useRef } from 'react'

export const ResultsContext = createContext()

export default function ResultsContextProvider({ children }) {
  const gameDuration = useRef(0)
  const numberOfCorrectAnswers = useRef(0)

  const value = {
    gameDuration,
    numberOfCorrectAnswers,
  }
  return (
    <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>
  )
}

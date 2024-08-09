import { useContext, useMemo, useRef, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { SettingsContext } from '../../context/SettingsContext'
import { ResultsContext } from '../../context/ResultsContext'
import { sendQuizResultsData } from '../../util/http'

export default function useQuizResultsFetch() {
  const { settingsData } = useContext(SettingsContext)
  const { gameDuration, numberOfCorrectAnswers } = useContext(ResultsContext)
  const isNewHighScore = useRef(false)
  const hasSent = useRef(false)

  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()
  const year = today.getFullYear()
  const formattedDate = `${month}-${day}-${year}`

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: sendQuizResultsData,
    onSuccess: ({ newHighScore }) => {
      isNewHighScore.current = newHighScore
      gameDuration.current = 0
    },
  })

  const quizResultsData = useMemo(() => {
    return {
      userName: settingsData.userName,
      correctAnswers: numberOfCorrectAnswers.current,
      duration: gameDuration.current,
      category: settingsData.category,
      difficulty: settingsData.difficulty,
      date: formattedDate,
    }
  }, [
    gameDuration,
    numberOfCorrectAnswers,
    settingsData.category,
    settingsData.difficulty,
    settingsData.userName,
    formattedDate,
  ])

  useEffect(() => {
    if (!hasSent.current) {
      mutate(quizResultsData)
      hasSent.current = true
    }
  }, [mutate, quizResultsData])

  return { isNewHighScore, isLoading, isError, error }
}

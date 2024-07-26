import { useContext, useMemo, useRef, useEffect } from 'react'
import { useMutation } from '@tanstack/react-query'
import { ResultsContext } from '../../shared/context/ResultsContext'
import { SettingsContext } from '../../shared/context/SettingsContext'
import { sendQuizResultsData } from '../../shared/util/http'

export default function useQuizResultsFetch() {
  const { settingsData } = useContext(SettingsContext)
  const { gameDuration, numberOfCorrectAnswers } = useContext(ResultsContext)
  const hasSent = useRef(false)
  const today = new Date().toLocaleDateString()

  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: sendQuizResultsData,
    onSuccess: (highScores) => {
      gameDuration.current = 0
      console.log('Mutation successful:', highScores)
    },
  })

  const quizResultsData = useMemo(() => {
    return {
      userName: settingsData.userName,
      correctAnswers: numberOfCorrectAnswers.current,
      duration: gameDuration.current,
      category: settingsData.category,
      difficulty: settingsData.difficulty,
      date: today,
    }
  }, [
    gameDuration,
    numberOfCorrectAnswers,
    settingsData.category,
    settingsData.difficulty,
    settingsData.userName,
    today,
  ])

  useEffect(() => {
    if (!hasSent.current) {
      mutate(quizResultsData)
      hasSent.current = true
    }
  }, [mutate, quizResultsData])

  return { isLoading, isError, error }
}

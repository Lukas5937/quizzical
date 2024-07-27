import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { QuestionsContext } from '../../shared/context/QuestionsContext'
import { SettingsContext } from '../../shared/context/SettingsContext'
import { sendQuizSettingsData } from '../../shared/util/http'

export default function useQuizSettingsFetch() {
  const { settingsData } = useContext(SettingsContext)
  const { setQuestions } = useContext(QuestionsContext)
  const navigate = useNavigate()

  function shuffleArray(array) {
    return array.sort(() => 0.5 - Math.random())
  }

  function formatQuestions(questions) {
    return questions.map((question) => {
      const sortedAnswers = [
        ...question.incorrect_answers,
        question.correct_answer,
      ]
      const answers = shuffleArray(sortedAnswers)
      return { ...question, answers }
    })
  }

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: sendQuizSettingsData,
    onSuccess: (questions) => {
      const formattedQuestions = formatQuestions(questions)
      setQuestions(formattedQuestions)
      navigate('/quiz/game')
    },
  })

  function handleSubmit(event) {
    event.preventDefault()
    mutate(settingsData)
  }

  return { handleSubmit, isPending, isError, error }
}

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { QuestionsContext } from '../../context/QuestionsContext'
import { SettingsContext } from '../../context/SettingsContext'
import { sendQuizSettingsData } from '../../util/http'

export default function useQuizSettingsFetch() {
  const { settingsData, formIsInvalid, setFormIsInvalid } =
    useContext(SettingsContext)
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

  const invalidUserName =
    settingsData.userName.length < 5 || settingsData.userName.length > 20
  const invalidCategory = settingsData.category === ''
  const invalidDifficulty = settingsData.difficulty === ''

  function handleSubmit(event) {
    event.preventDefault()
    setFormIsInvalid({
      userName: false,
      category: false,
      difficulty: false,
    })

    if (invalidUserName) {
      setFormIsInvalid((prevState) => {
        return { ...prevState, userName: true }
      })
    }
    if (invalidCategory) {
      setFormIsInvalid((prevState) => {
        return { ...prevState, category: true }
      })
    }
    if (invalidDifficulty) {
      setFormIsInvalid((prevState) => {
        return { ...prevState, difficulty: true }
      })
    }
    if (!invalidUserName && !invalidCategory && !invalidDifficulty) {
      mutate(settingsData)
      setFormIsInvalid({
        userName: false,
        category: false,
        difficulty: false,
      })
    }
  }

  return {
    handleSubmit,
    isPending,
    isError,
    error,
    formIsInvalid,
    setFormIsInvalid,
  }
}

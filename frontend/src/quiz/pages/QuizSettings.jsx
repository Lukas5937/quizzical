import { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { SettingsContext } from '../../shared/context/SettingsContext'
import { QuestionsContext } from '../../shared/context/QuestionsContext'
import { sendQuizSettingsData } from '../../shared/util/http'
import Input from '../components/Input'
import CategoryButtons from '../../shared/components/CategoryButtons'
import DifficultyButtons from '../components/DifficultyButtons'
import LoadingSpinner from '../../shared/components/LoadingSpinner'
import ErrorBox from '../../shared/components/ErrorBox'

export default function QuizSettings() {
  const { settingsData, setSettingsData, handleChange } =
    useContext(SettingsContext)
  const { setQuestions } = useContext(QuestionsContext)
  const navigate = useNavigate()
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      const initialResetNeeded =
        settingsData.category &&
        !settingsData.userName &&
        !settingsData.difficulty

      if (!initialResetNeeded) {
        setSettingsData({
          userName: '',
          category: '',
          difficulty: '',
        })
      }
    }
  }, [settingsData, setSettingsData])

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

  return (
    <section>
      {!isError && (
        <>
          <h2>Quiz Settings</h2>
          <form onSubmit={handleSubmit}>
            <Input
              name="userName"
              value={settingsData.userName}
              label="Please provide a username to personalize your quiz experience."
              onChange={handleChange}
            />
            <CategoryButtons
              settingsData={settingsData}
              handleChange={handleChange}
            />
            <DifficultyButtons
              settingsData={settingsData}
              handleChange={handleChange}
            />
            <button className="button accent">Start Quiz</button>
          </form>
          {isPending && <LoadingSpinner />}
        </>
      )}
      {isError && <ErrorBox error={error} />}
    </section>
  )
}

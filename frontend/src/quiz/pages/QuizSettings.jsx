import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { SettingsContext } from '../../shared/context/SettingsContext'
import { sendQuizSettingsData } from '../../shared/util/http'
import Input from '../components/Input'
import CategoryButtons from '../../shared/components/CategoryButtons'
import DifficultyButtons from '../components/DifficultyButtons'

export default function QuizSettings() {
  const { settingsData, handleChange } = useContext(SettingsContext)
  console.log(settingsData)

  const navigate = useNavigate()

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: sendQuizSettingsData,
    onSuccess: () => {
      navigate('/quiz/game')
    },
  })

  function handleSubmit(event) {
    event.preventDefault()
    mutate({ quizSettings: settingsData })
  }

  return (
    <>
      <section>
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
          <button className="start-quiz-button">Start Quiz</button>
        </form>
        {isPending && <p>Submitting</p>}
        {isError && <p>An error occurred. Error code: {error.code}</p>}
      </section>
    </>
  )
}

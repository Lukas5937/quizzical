import { useContext } from 'react'
import { SettingsContext } from '../../shared/context/SettingsContext'
import Input from '../components/Input'
import CategoryButtons from '../../shared/components/CategoryButtons'
import DifficultyButtons from '../components/DifficultyButtons'
import Button from '../../shared/components/Button'

export default function QuizSettings() {
  const { settingsData, handleChange } = useContext(SettingsContext)

  console.log(settingsData)

  return (
    <>
      <section>
        <h2>Quiz Settings</h2>
        <form action="">
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
          <Button to="/quiz/game" className="start-quiz-button">
            Start Quiz
          </Button>
        </form>
      </section>
    </>
  )
}

import { useContext } from 'react'
import { SettingsContext } from '../../shared/context/SettingsContext'
import Input from '../components/Input'
import CategoryButtons from '../../shared/components/CategoryButtons'
import DifficultyButton from '../components/DifficultyButton'
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

          <fieldset>
            <legend>
              Choose the difficulty level for your quiz questions.
            </legend>

            <DifficultyButton
              value="easy"
              label="Easy"
              isChecked={settingsData.difficulty === 'easy'}
              onChange={handleChange}
            />
            <DifficultyButton
              value="medium"
              label="Medium"
              isChecked={settingsData.difficulty === 'medium'}
              onChange={handleChange}
            />
            <DifficultyButton
              value="hard"
              label="Hard"
              isChecked={settingsData.difficulty === 'hard'}
              onChange={handleChange}
            />
          </fieldset>
          <Button to="/quiz/game" className="start-quiz-button">
            Start Quiz
          </Button>
        </form>
      </section>
    </>
  )
}

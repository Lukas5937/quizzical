import { useState } from 'react'

import Input from '../components/Input'
import CategoryButton from '../../shared/components/CategoryButton'
import DifficultyButton from '../components/DifficultyButton'
import Button from '../../shared/components/Button'

export default function QuizSettings() {
  const [settingsData, setSettingsData] = useState({
    userName: '',
    category: '',
    difficulty: '',
  })

  function handleChange(event) {
    setSettingsData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
  }

  console.log(settingsData)

  return (
    <>
      <section>
        <section>
          <h2>Quiz Settings</h2>
          <form action="">
            <Input
              name="userName"
              value={settingsData.userName}
              label="Please provide a username to personalize your quiz experience."
              onChange={handleChange}
            />
            <p></p>
            <fieldset>
              <legend>
                Select a category for your quiz questions from the options
                below.
              </legend>
              <CategoryButton
                value="general-knowledge"
                label="General knowledge"
                isChecked={settingsData.category === 'general-knowledge'}
                onChange={handleChange}
              />
              <CategoryButton
                value="science-and-nature"
                label="Science and Nature"
                isChecked={settingsData.category === 'science-and-nature'}
                onChange={handleChange}
              />
              <CategoryButton
                value="sports"
                label="Sports"
                isChecked={settingsData.category === 'sports'}
                onChange={handleChange}
              />
              <CategoryButton
                value="geography"
                label="Geography"
                isChecked={settingsData.category === 'geography'}
                onChange={handleChange}
              />
              <CategoryButton
                value="history"
                label="History"
                isChecked={settingsData.category === 'history'}
                onChange={handleChange}
              />
              <CategoryButton
                value="politics"
                label="Politics"
                isChecked={settingsData.category === 'politics'}
                onChange={handleChange}
              />
              <CategoryButton
                value="arts"
                label="Arts"
                isChecked={settingsData.category === 'arts'}
                onChange={handleChange}
              />
              <CategoryButton
                value="animals"
                label="Animals"
                isChecked={settingsData.category === 'animals'}
                onChange={handleChange}
              />
            </fieldset>
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
      </section>
    </>
  )
}

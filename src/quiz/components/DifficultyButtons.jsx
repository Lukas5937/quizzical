import DifficultyButton from './DifficultyButton'

export default function DifficultyButtons({ settingsData, handleChange }) {
  return (
    <fieldset>
      <legend>Choose the difficulty level for your quiz questions.</legend>

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
  )
}

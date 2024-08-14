import DifficultyButton from './DifficultyButton'

export default function DifficultyButtons({
  settingsData,
  handleChange,
  formIsInvalid,
}) {
  return (
    <fieldset className="input-container input-margin">
      <legend>Choose the difficulty level for your quiz questions</legend>
      <div className="difficulty-buttons-container">
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
      </div>
      {formIsInvalid.difficulty && (
        <p className="invalid-data-text">Please select a difficulty.</p>
      )}
    </fieldset>
  )
}

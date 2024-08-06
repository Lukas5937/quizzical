export default function DifficultyButton({
  value,
  label,
  isChecked,
  onChange,
}) {
  return (
    <>
      <input
        type="radio"
        id={value}
        name="difficulty"
        value={value}
        checked={isChecked}
        onChange={onChange}
        required
      />
      <label
        className={`button small-button ${!isChecked && 'light-button'}`}
        htmlFor={value}
      >
        {label}
      </label>
    </>
  )
}

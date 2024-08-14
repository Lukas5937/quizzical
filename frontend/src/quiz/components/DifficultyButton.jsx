export default function DifficultyButton({
  value,
  label,
  isChecked,
  onChange,
}) {
  return (
    <>
      <input
        className="radio-button"
        type="radio"
        id={value}
        name="difficulty"
        value={value}
        checked={isChecked}
        onChange={onChange}
      />
      <label
        className={`button small-button difficulty-button ${
          !isChecked && 'light-button'
        }`}
        htmlFor={value}
      >
        {label}
      </label>
    </>
  )
}

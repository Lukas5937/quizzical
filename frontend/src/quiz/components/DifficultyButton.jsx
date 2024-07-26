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
      <label htmlFor={value}>{label}</label>
    </>
  )
}

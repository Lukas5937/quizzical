export default function CategoryButton({
  value,
  img,
  label,
  isChecked,
  onChange,
}) {
  return (
    <>
      <input
        type="radio"
        id={value}
        name="category"
        value={value}
        checked={isChecked}
        onChange={onChange}
        required
      />
      <label htmlFor={value}>{label}</label>
    </>
  )
}

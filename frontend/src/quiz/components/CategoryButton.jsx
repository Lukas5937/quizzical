export default function CategoryButton({
  value,
  label,
  isChecked,
  onChange,
  children,
}) {
  return (
    <div className="category-button-container">
      <input
        type="radio"
        id={value}
        name="category"
        value={value}
        checked={isChecked}
        onChange={onChange}
        required
      />
      <label htmlFor={value}>
        <div className="category-button-label-container">
          {children}
          <p>{label}</p>
        </div>
      </label>
    </div>
  )
}

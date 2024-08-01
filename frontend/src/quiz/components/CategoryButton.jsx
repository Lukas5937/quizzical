export default function CategoryButton({
  value,
  img,
  label,
  isChecked,
  onChange,
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
          <img className="category-button-image" src={img} alt={label} />
          <p>{label}</p>
        </div>
      </label>
    </div>
  )
}

export default function Input({ name, value, label, onChange }) {
  return (
    <>
      <div className="input-container input-margin">
        <label className="input-label" htmlFor={name}>
          {label}
        </label>
        <input
          className="text-input"
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          minLength="3"
          maxLength="20"
          required
        />
      </div>
    </>
  )
}

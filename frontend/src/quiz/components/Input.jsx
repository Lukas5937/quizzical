export default function Input({ name, value, label, onChange, formIsInvalid }) {
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
        />
        {formIsInvalid.userName ? (
          <p className="invalid-data-text push-down">
            {value.length > 20
              ? 'Username must be a max. of 20 characters.'
              : 'Username must be at least 5 characters long.'}
          </p>
        ) : null}
      </div>
    </>
  )
}

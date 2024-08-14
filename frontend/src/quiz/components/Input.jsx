export default function Input({
  name,
  value,
  label,
  onChange,
  onBlur,
  didEdit,
  invalidUserName,
  formIsInvalid,
}) {
  console.log(invalidUserName)
  console.log(didEdit)
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
          onBlur={onBlur}
        />
        {(invalidUserName && didEdit) || formIsInvalid.userName ? (
          <p className="invalid-data-text push-down">
            {value.length > 20
              ? 'Username must be no more than 20 characters long.'
              : 'Username must be at least 5 characters long.'}
          </p>
        ) : null}
      </div>
    </>
  )
}

export default function Input({ name, value, label, onChange }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </>
  )
}

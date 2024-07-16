export default function Input({ name, label }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} />
    </>
  )
}

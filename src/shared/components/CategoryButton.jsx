export default function CategoryButton({ name, img, label }) {
  return (
    <>
      <input type="radio" name="category" id={name} value={name} />
      <label htmlFor={name}>{label}</label>
    </>
  )
}

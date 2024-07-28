export default function ErrorBox({ error }) {
  return (
    <div className="error-box">
      <h3>An error occurred.</h3>
      <p>{error.message || 'Failed to fetch data, please try again.'}</p>
    </div>
  )
}

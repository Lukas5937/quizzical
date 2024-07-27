export default function HighScoresTable({ highScoreData }) {
  const tableBody = highScoreData.map((results) => {
    return (
      <tr key={results._id}>
        <td>{results.userName}</td>
        <td>{results.correctAnswers}</td>
        <td>{results.duration}</td>
        <td>{results.category}</td>
        <td>{results.difficulty}</td>
        <td>{results.date}</td>
      </tr>
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th className="high-scores-table__th" scope="col">
            User name
          </th>
          <th className="high-scores-table__th" scope="col">
            Correct answers
          </th>
          <th className="high-scores-table__th" scope="col">
            Game duration
          </th>
          <th className="high-scores-table__th" scope="col">
            Category
          </th>
          <th className="high-scores-table__th" scope="col">
            Difficulty
          </th>
          <th className="high-scores-table__th" scope="col">
            Date
          </th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </table>
  )
}

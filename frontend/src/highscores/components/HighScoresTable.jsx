import { motion } from 'framer-motion'

export default function HighScoresTable({ highScoreData }) {
  let rank = 0
  const tableBody = highScoreData.map((results) => {
    rank += 1
    return (
      <tr key={results._id}>
        <td>{rank}</td>
        <td>{results.userName}</td>
        <td>{results.correctAnswers} /10</td>
        <td>{results.duration} sec</td>
        <td>{results.category.split('-').join(' ')}</td>
        <td>{results.difficulty}</td>
        <td>{results.date}</td>
      </tr>
    )
  })

  return (
    <motion.table
      className="high-scores-table"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, type: 'tween' }}
    >
      <thead>
        <tr>
          <th className="high-scores-table-th" scope="col">
            Rank
          </th>
          <th className="high-scores-table-th" scope="col">
            User name
          </th>
          <th className="high-scores-table-th" scope="col">
            Correct answers
          </th>
          <th className="high-scores-table-th" scope="col">
            Time
          </th>
          <th className="high-scores-table-th" scope="col">
            Category
          </th>
          <th className="high-scores-table-th" scope="col">
            Difficulty
          </th>
          <th className="high-scores-table-th" scope="col">
            Date
          </th>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </motion.table>
  )
}

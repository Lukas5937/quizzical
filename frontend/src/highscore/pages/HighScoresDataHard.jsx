import { useContext } from 'react'
import { ResultsContext } from '../../shared/context/ResultsContext'

export default function HighScoresDataHard() {
  const { gameDuration } = useContext(ResultsContext)

  const DUMMY_HIGH_SCORES = [
    {
      id: 1,
      userName: 'Max Mustermann',
      correctAnswers: 7,
      gameDuration: 54,
      category: 'sports',
      difficulty: 'hard',
      date: '24/06/2024',
    },
    {
      id: 2,
      userName: 'Max Mustermann',
      correctAnswers: 7,
      gameDuration: 54,
      category: 'sports',
      difficulty: 'hard',
      date: '24/06/2024',
    },
    {
      id: 3,
      userName: 'Max Mustermann',
      correctAnswers: 7,
      gameDuration: 54,
      category: 'sports',
      difficulty: 'hard',
      date: '24/06/2024',
    },
    {
      id: 4,
      userName: 'Max Mustermann',
      correctAnswers: 7,
      gameDuration: 54,
      category: 'sports',
      difficulty: 'hard',
      date: '24/06/2024',
    },
    {
      id: 5,
      userName: 'Max Mustermann',
      correctAnswers: 7,
      gameDuration: 54,
      category: 'sports',
      difficulty: 'hard',
      date: '24/06/2024',
    },
  ]

  const tableBody = DUMMY_HIGH_SCORES.map((results) => {
    return (
      <tr key={results.id}>
        <td>{results.userName}</td>
        <td>{results.correctAnswers}</td>
        <td>{results.gameDuration}</td>
        <td>{results.category}</td>
        <td>{results.difficulty}</td>
        <td>{results.date}</td>
      </tr>
    )
  })

  return (
    <>
      <h2>High Scores</h2>
      <table>
        <thead>
          <th className="high-scores-table__th">User name</th>
          <th className="high-scores-table__th">Correct answers</th>
          <th className="high-scores-table__th">Game duration</th>
          <th className="high-scores-table__th">Category</th>
          <th className="high-scores-table__th">Difficulty</th>
          <th className="high-scores-table__th">Date</th>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </>
  )
}

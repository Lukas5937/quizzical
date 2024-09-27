import useHighScoreDataFetch from '../hooks/useHighScoreDataFetch'
import HighScoresTable from '../components/HighScoresTable'
import CircularProgress from '@mui/material/CircularProgress'
import ErrorBox from '../../UI/ErrorBox'

export default function HighScoresDataMedium() {
  const { data, isPending, isError, error } = useHighScoreDataFetch('medium')

  let content

  if (isPending) {
    content = (
      <div className="circular-progress-container">
        <CircularProgress className="circular-progress " />
      </div>
    )
  }

  if (isError) {
    content = <ErrorBox error={error} />
  }

  if (data) {
    content = <HighScoresTable highScoreData={data} />

    return <section className="high-score-section">{content}</section>
  }
}

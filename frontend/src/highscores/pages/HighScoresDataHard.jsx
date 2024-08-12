import useHighScoreDataFetch from '../hooks/useHighScoreDataFetch'
import HighScoresTable from '../components/HighScoresTable'
import CircularProgress from '@mui/material/CircularProgress'
import ErrorBox from '../../UI/ErrorBox'

export default function HighScoresDataHard() {
  const { data, isPending, isError, error } = useHighScoreDataFetch('hard')

  let content

  if (isPending) {
    content = <CircularProgress className="circular-progress" />
  }

  if (isError) {
    content = <ErrorBox error={error} />
  }

  if (data) {
    content = <HighScoresTable highScoreData={data} />

    return <section className="high-score-section">{content}</section>
  }
}

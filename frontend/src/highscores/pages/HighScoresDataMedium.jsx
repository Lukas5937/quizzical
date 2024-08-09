import useHighScoreDataFetch from '../hooks/useHighScoreDataFetch'
import HighScoresTable from '../components/HighScoresTable'
import CircularProgress from '@mui/material/CircularProgress'
import ErrorBox from '../../UI/ErrorBox'

export default function HighScoresDataMedium() {
  const { data, isPending, isError, error } = useHighScoreDataFetch('medium')

  let content

  if (isPending) {
    content = <CircularProgress className="circular-progress" />
  }

  if (isError) {
    content = <ErrorBox error={error} />
  }

  if (data) {
    content = <HighScoresTable highScoreData={data} />

    return <section>{content}</section>
  }
}

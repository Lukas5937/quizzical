import useHighScoreDataFetch from '../hooks/useHighScoreDataFetch'
import HighScoresTable from '../components/HighScoresTable'
import LoadingSpinner from '../../UI/LoadingSpinner'
import ErrorBox from '../../UI/ErrorBox'

export default function HighScoresDataEasy() {
  const { data, isPending, isError, error } = useHighScoreDataFetch('easy')

  let content

  if (isPending) {
    content = <LoadingSpinner />
  }

  if (isError) {
    content = <ErrorBox error={error} />
  }

  if (data) {
    content = <HighScoresTable highScoreData={data} />

    return <section>{content}</section>
  }
}

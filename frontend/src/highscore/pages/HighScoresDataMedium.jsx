import useHighScoreDataFetch from '../hooks/useHighScoreDataFetch'
import HighScoresTable from '../components/HighScoresTable'
import LoadingSpinner from '../../shared/components/LoadingSpinner'
import ErrorBox from '../../shared/components/ErrorBox'

export default function HighScoresDataMedium() {
  const { data, isPending, isError, error } = useHighScoreDataFetch('medium')

  let content

  if (isPending) {
    content = <LoadingSpinner />
  }

  if (isError) {
    content = <ErrorBox error={error} />
  }

  if (data) {
    content = <HighScoresTable highScoreData={data} />

    return (
      <>
        <h2>High Scores</h2>
        {content}
      </>
    )
  }
}

import { useQuery } from '@tanstack/react-query'
import { getHighScores } from '../../util/http'

export default function useHighScoreDataFetch(difficulty) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['highScores'],
    queryFn: ({ signal }) => getHighScores({ signal, difficulty }),
  })

  return { data, isPending, isError, error }
}

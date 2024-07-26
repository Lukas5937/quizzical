import { useQuery } from '@tanstack/react-query'
import { getHighScores } from '../../shared/util/http'

export default function useHighScoreDataFetch(difficulty) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['highScores'],
    queryFn: ({ signal }) => getHighScores({ signal, difficulty: difficulty }),
  })

  return { data, isPending, isError, error }
}

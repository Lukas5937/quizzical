import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export async function sendQuizSettingsData(quizSettingsData) {
  const response = await fetch(`http://localhost:4000/api/v1/quiz/questions`, {
    method: 'POST',
    body: JSON.stringify(quizSettingsData),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const error = new Error(
      'An error occurred while sending the quiz settings data.'
    )
    error.code = response.status
    error.info = await response.json()
    throw error
  }

  const { questions } = await response.json()

  return questions
}

export async function sendQuizResultsData(quizResultsData) {
  const response = await fetch(`http://localhost:4000/api/v1/high-scores`, {
    method: 'POST',
    body: JSON.stringify(quizResultsData),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    const error = new Error('An error occurred sending the quiz results data.')
    error.code = response.status
    error.info = await response.json()
    throw error
  }

  const { highScores, newHighScore } = await response.json()
  const highScoresData = { highScores, newHighScore }

  return highScoresData
}

export async function getHighScores({ signal, difficulty }) {
  const url = `http://localhost:4000/api/v1/high-scores?difficulty=${difficulty}`

  const response = await fetch(url, { signal })

  if (!response.ok) {
    const error = new Error('An error occurred fetching the high scores data.')
    error.code = response.status
    error.info = await response.json()
    throw error
  }

  const { highScores } = await response.json()

  return highScores
}

import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export async function sendQuizSettingsData(quizSettingsData) {
  const response = await fetch(`http://localhost:4000/quiz/questions`, {
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

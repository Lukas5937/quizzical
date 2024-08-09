import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ContextProviders from './context/ContextProviders.jsx'
import Navigation from './Navigation.jsx'
import ErrorPage from './ErrorPage.jsx'
import Home from './Home.jsx'
import QuizSettings from './quiz/pages/QuizSettings'
import QuizGame from './quiz/pages/QuizGame'
import QuizResults from './quiz/pages/QuizResults'
import HighScoresNavigation from './highscores/components/HighScoresNavigation.jsx'
import HighScoresDataEasy from './highscores/pages/HighScoresDataEasy.jsx'
import HighScoresDataMedium from './highscores/pages/HighScoresDataMedium.jsx'
import HighScoresDataHard from './highscores/pages/HighScoresDataHard.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      errorElement: <ErrorPage />,
      children: [
        { path: '', element: <Home /> },
        { path: 'quiz/settings', element: <QuizSettings /> },
        { path: 'quiz/game', element: <QuizGame /> },
        { path: 'quiz/results', element: <QuizResults /> },
        {
          path: 'high-scores',
          element: <HighScoresNavigation />,
          children: [
            { path: '', element: <Navigate to="hard" replace /> },
            { path: 'easy', element: <HighScoresDataEasy /> },
            { path: 'medium', element: <HighScoresDataMedium /> },
            { path: 'hard', element: <HighScoresDataHard /> },
          ],
        },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ])

  return (
    <>
      <ContextProviders>
        <RouterProvider router={router} />
      </ContextProviders>
    </>
  )
}

export default App

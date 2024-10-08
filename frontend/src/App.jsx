import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ContextProviders from './context/ContextProviders.jsx'
import Navigation from './Navigation.jsx'
import ErrorPage from './ErrorPage.jsx'
import Home from './Home.jsx'
import QuizSettings from './quiz/pages/QuizSettings'
import HighScoresNavigation from './high-scores/components/HighScoresNavigation.jsx'
import CircularProgress from '@mui/material/CircularProgress'
import HighScoresDataEasy from './high-scores/pages/HighScoresDataEasy.jsx'
import HighScoresDataMedium from './high-scores/pages/HighScoresDataMedium.jsx'
import HighScoresDataHard from './high-scores/pages/HighScoresDataHard.jsx'

const QuizGame = lazy(() => import('./quiz/pages/QuizGame'))
const QuizResults = lazy(() => import('./quiz/pages/QuizResults'))

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      errorElement: <ErrorPage />,
      children: [
        { path: '', element: <Home /> },
        { path: 'quiz/settings', element: <QuizSettings /> },
        {
          path: 'quiz/game',
          element: (
            <Suspense
              fallback={
                <div className="circular-progress-container">
                  <CircularProgress className="circular-progress " />
                </div>
              }
            >
              <QuizGame />
            </Suspense>
          ),
        },
        {
          path: 'quiz/results',
          element: (
            <Suspense
              fallback={
                <div className="circular-progress-container">
                  <CircularProgress className="circular-progress " />
                </div>
              }
            >
              <QuizResults />
            </Suspense>
          ),
        },
        {
          path: 'high-scores',
          element: <HighScoresNavigation />,
          children: [
            { path: '', element: <Navigate to="hard" replace /> },
            {
              path: 'easy',
              element: <HighScoresDataEasy />,
            },
            {
              path: 'medium',
              element: <HighScoresDataMedium />,
            },
            {
              path: 'hard',
              element: <HighScoresDataHard />,
            },
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

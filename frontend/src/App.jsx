import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import ContextProviders from './context/ContextProviders.jsx'
import Navigation from './Navigation.jsx'
import ErrorPage from './ErrorPage.jsx'
import Home from './Home.jsx'
import QuizSettings from './quiz/pages/QuizSettings'
import HighScoresNavigation from './high-scores/components/HighScoresNavigation.jsx'
import CircularProgress from '@mui/material/CircularProgress'

const QuizGame = lazy(() => import('./quiz/pages/QuizGame'))

const QuizResults = lazy(() => import('./quiz/pages/QuizResults'))

const HighScoresDataEasy = lazy(() =>
  import('./high-scores/pages/HighScoresDataEasy.jsx')
)
const HighScoresDataMedium = lazy(() =>
  import('./high-scores/pages/HighScoresDataMedium.jsx')
)
const HighScoresDataHard = lazy(() =>
  import('./high-scores/pages/HighScoresDataHard.jsx')
)

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
                <CircularProgress className="circular-progress center" />
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
                <CircularProgress className="circular-progress center" />
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
              element: (
                <Suspense
                  fallback={
                    <CircularProgress className="circular-progress center" />
                  }
                >
                  <HighScoresDataEasy />
                </Suspense>
              ),
            },
            {
              path: 'medium',
              element: (
                <Suspense
                  fallback={
                    <CircularProgress className="circular-progress center" />
                  }
                >
                  <HighScoresDataMedium />
                </Suspense>
              ),
            },
            {
              path: 'hard',
              element: (
                <Suspense
                  fallback={
                    <CircularProgress className="circular-progress center" />
                  }
                >
                  <HighScoresDataHard />
                </Suspense>
              ),
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

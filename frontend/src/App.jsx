import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContextProviders from './shared/context/ContextProviders'
import Navigation from './shared/navigation/Navigation'
import Home from './home/Home'
import './App.css'
import QuizSettings from './quiz/pages/QuizSettings'
import QuizGame from './quiz/pages/QuizGame'
import QuizResults from './quiz/pages/QuizResults'
import HighScoresNavigation from './highscore/components/HighScoresNavigation'
import HighScoresDataEasy from './highscore/pages/HighScoresDataEasy.jsx'
import HighScoresDataMedium from './highscore/pages/HighScoresDataMedium.jsx'
import HighScoresDataHard from './highscore/pages/HighScoresDataHard.jsx'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      children: [
        { path: '', element: <Home /> },
        { path: 'quiz/settings', element: <QuizSettings /> },
        { path: 'quiz/game', element: <QuizGame /> },
        { path: 'quiz/results', element: <QuizResults /> },
        {
          path: 'high-scores',
          element: <HighScoresNavigation />,
          children: [
            { path: 'easy', element: <HighScoresDataEasy /> },
            { path: 'medium', element: <HighScoresDataMedium /> },
            { path: 'hard', element: <HighScoresDataHard /> },
          ],
        },
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

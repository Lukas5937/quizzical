import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContextProviders from './shared/context/ContextProviders'
import Navigation from './shared/navigation/Navigation'
import Home from './home/Home'
import './App.css'
import QuizSettings from './quiz/pages/QuizSettings'
import QuizGame from './quiz/pages/QuizGame'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      children: [
        { path: '', element: <Home /> },
        { path: 'quiz/settings', element: <QuizSettings /> },
        { path: 'quiz/game', element: <QuizGame /> },
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

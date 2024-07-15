import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navigation from './home/components/Navigation'
import Home from './home/Home'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      children: [{ path: '', element: <Home /> }],
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

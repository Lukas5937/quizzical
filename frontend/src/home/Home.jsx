import { useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SettingsContext } from '../shared/context/SettingsContext'
import CategoryButtons from '../shared/components/CategoryButtons'

export default function Home() {
  const { settingsData, handleChange, setSettingsData } =
    useContext(SettingsContext)
  const navigate = useNavigate()

  useEffect(() => {
    setSettingsData({
      userName: '',
      category: '',
      difficulty: '',
    })
  }, [setSettingsData])

  function handleClick(event) {
    handleChange(event)
    navigate('/quiz/settings')
  }

  return (
    <header>
      <div className="home-content">
        <h1>Test your knowledge with QuizNerds!</h1>
        <p className="home-subtitle">
          Challenge yourself and compete with others in various categories.
        </p>
        <Link to="quiz/settings" className="button accent">
          New Quiz
        </Link>
        <Link to="high-scores/hard" className="button">
          Watch High Scores
        </Link>
        <div className="category-buttons-container">
          <CategoryButtons
            settingsData={settingsData}
            handleChange={handleClick}
          />
        </div>
      </div>
      <div className="home-images"></div>
    </header>
  )
}

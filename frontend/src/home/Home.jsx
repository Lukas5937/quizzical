import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { SettingsContext } from '../shared/context/SettingsContext'
import Button from '../shared/components/Button'
import CategoryButtons from '../shared/components/CategoryButtons'

export default function Home() {
  const { settingsData, handleChange } = useContext(SettingsContext)
  console.log(settingsData)

  const navigate = useNavigate()

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
        <Button to="quiz/settings" type="accent">
          New Quiz
        </Button>
        <Button>Watch High Scores</Button>
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
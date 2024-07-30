import { useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { SettingsContext } from './context/SettingsContext'
import CategoryButtons from './quiz/components/CategoryButtons'
import Symbol from './UI/Symbol'
import './Home.css'
import HighLightEffect from './assets/Home/HighlightEffect.svg'
import HighlightSparkle from './assets/Home/HighlightSparkle.svg'
import HighlightStars from './assets/Home/HighlightStars.svg'
import SpringLineCurly from './assets/Home/SpringLineCurly.svg'

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
      <div className="home-container">
        <h1 className="home-heading">Quizzical</h1>
        <div className="home-symbols-container">
          <Symbol
            image={HighLightEffect}
            alt="Highlight effect symbol"
            size="large"
          />
          <Symbol
            image={HighlightSparkle}
            alt="Highlight sparkle symbol"
            size="large"
          />
          <Symbol
            image={HighlightStars}
            alt="Highlight stars symbol"
            size="large"
          />
          <Symbol
            image={SpringLineCurly}
            alt="Spring line curly symbol"
            size="large"
          />
        </div>
        <h2 className="home-subtitle">Let the games begin!</h2>
        <div className="home-paragraphs-container">
          <p className="home-paragraph">
            Welcome to Quizzical. Your one-stop hub for a trivia extravaganza.
            This ain’t your ordinary quiz app. This is your ticket to a world
            where knowledge is power and power means bragging rights!
          </p>
          <p className="home-paragraph">
            Navigate through intriguing quiz settings, or dive straight into the
            game of wits. But remember - the clock’s ticking. Ready to test your
            gray matter?
          </p>
        </div>
        <Link to="quiz/settings" className="button accent">
          Start Quiz
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
    </header>
  )
}

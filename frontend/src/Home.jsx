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
import Footer from './UI/Footer'

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
      <div className="content-container-large">
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
          <p className="no-margin">
            Welcome to Quizzical, your one-stop hub for a trivia extravaganza.
            This ain’t your ordinary quiz app. This is your ticket to a world
            where knowledge is power, and power means bragging rights! Get ready
            to embark on a journey filled with intriguing questions and
            fascinating facts that will challenge your intellect.
          </p>
          <p className="no-margin">
            Navigate through our diverse quiz settings, selecting from a range
            of topics that pique your interest. Or, if you’re feeling
            adventurous, dive straight into the game of wits and put your skills
            to the test. But remember - the clock’s ticking, and every second
            counts. Are you ready to test your gray matter and prove your
            prowess?
          </p>
        </div>
        <div className="home-paragraphs-container">
          <div className="light-card">
            <h3>Ready to begin?</h3>
            <p>
              Can&#39;t wait to jump in? You&#39;re at the right place! Click on
              <span> Start Quiz</span> to get underway with your mind-bending
              journey. Dive into a world of challenging questions and exciting
              trivia. Test your knowledge, learn new facts, and compete for the
              top scores. The adventure starts now!
            </p>
            <Link to="quiz/settings" className="button accent push-down">
              Start Quiz
            </Link>
          </div>
          <div className="light-card">
            <h3>Ready to see the best?</h3>
            <p>
              Curious about how you stack up against the competition? Check out
              the <span>high scores</span> to see the top players and their
              impressive achievements. Compare your scores, learn from the best,
              and get inspired to reach new heights. The leaderboard is filled
              with those who dared to be great – will you be next?
            </p>
            <Link to="high-scores" className="button push-down">
              Watch High Scores
            </Link>
          </div>
        </div>
        <div className="dark-card">
          <CategoryButtons
            settingsData={settingsData}
            handleChange={handleClick}
          />
        </div>
      </div>
      <Footer />
    </header>
  )
}

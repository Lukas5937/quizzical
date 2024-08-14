import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { SettingsContext } from './context/SettingsContext'
import CategoryButtons from './quiz/components/CategoryButtons'
import Button from './UI/Button'
import Symbols from './UI/Symbols'
import Footer from './UI/Footer'

import './Home.css'

export default function Home() {
  const { settingsData, handleChange, setSettingsData, formIsInvalid } =
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
    <>
      <div className="content-container-large">
        <header>
          <h1 className="home-heading">Quizzical</h1>
          <Symbols size="large" />
          <h2 className="home-subtitle">Let the games begin!</h2>
          <div className="home-paragraph-container">
            <p className="home-paragraph">
              Welcome to Quizzical, your one-stop hub for a trivia extravaganza.
              This ain&#39;t your ordinary quiz app. This is your ticket to a
              world where knowledge is power, and power means bragging rights!
              Get ready to embark on a journey filled with intriguing questions
              and fascinating facts that will challenge your intellect.
            </p>
            <p className="home-paragraph">
              Navigate through our diverse quiz settings, selecting from a range
              of topics that pique your interest. Or, if you&#39;re feeling
              adventurous, dive straight into the game of wits and put your
              skills to the test. But remember - the clock&#39;s ticking, and
              every second counts. Are you ready to test your gray matter and
              prove your prowess?
            </p>
          </div>
        </header>
        <section>
          <div className="home-paragraph-container">
            <div className="light-card">
              <h3>Ready to begin?</h3>
              <p>
                Can&#39;t wait to jump in? You&#39;re at the right place! Click
                on
                <span> Start Quiz</span> to get underway with your mind-bending
                journey. Dive into a world of challenging questions and exciting
                trivia. Test your knowledge, learn new facts, and compete for
                the top scores. The adventure starts now!
              </p>
              <Button to="quiz/settings" color="accent">
                Start Quiz
              </Button>
            </div>
            <div className="light-card">
              <h3>Ready to see the best?</h3>
              <p>
                Curious about how you stack up against the competition? Check
                out the <span>high scores</span> to see the top players and
                their impressive achievements. Compare your scores, learn from
                the best, and get inspired to reach new heights. The leaderboard
                is filled with those who dared to be great – will you be next?
              </p>
              <Button to="high-scores">Watch High Scores</Button>
            </div>
          </div>
        </section>
        <section>
          <div className="dark-card">
            <CategoryButtons
              settingsData={settingsData}
              handleChange={handleClick}
              formIsInvalid={formIsInvalid}
            />
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

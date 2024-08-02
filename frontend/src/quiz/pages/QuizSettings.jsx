import { useContext, useEffect, useRef } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import Button from '../../UI/Button'
import Symbol from '../../UI/Symbol'
import Input from '../components/Input'
import CategoryButtons from '../components/CategoryButtons'
import DifficultyButtons from '../components/DifficultyButtons'
import LoadingSpinner from '../../UI/LoadingSpinner'
import ErrorBox from '../../UI/ErrorBox'
import useQuizSettingsFetch from '../hooks/useQuizSettingsFetch'

import HighLightEffect from '../../assets/Symbols/HighlightEffect.svg'
import HighlightSparkle from '../../assets/Symbols/HighlightSparkle.svg'
import HighlightStars from '../../assets/Symbols/HighlightStars.svg'
import SpringLineCurly from '../../assets/Symbols/SpringLineCurly.svg'
import './QuizSettings.css'

export default function QuizSettings() {
  const { settingsData, setSettingsData, handleChange } =
    useContext(SettingsContext)
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      const initialResetNeeded =
        settingsData.category &&
        !settingsData.userName &&
        !settingsData.difficulty

      if (!initialResetNeeded) {
        setSettingsData({
          userName: '',
          category: '',
          difficulty: '',
        })
      }
    }
  }, [settingsData, setSettingsData])

  const { handleSubmit, isPending, isError, error } = useQuizSettingsFetch()

  return (
    <div className="content-container-large">
      <section className="quiz-settings-section">
        {!isError && (
          <>
            <h1>Quiz Settings</h1>
            <div className="symbols-container">
              <Symbol image={HighLightEffect} alt="Highlight effect symbol" />
              <Symbol image={HighlightSparkle} alt="Highlight sparkle symbol" />
              <Symbol image={HighlightStars} alt="Highlight stars symbol" />
              <Symbol image={SpringLineCurly} alt="Spring line curly symbol" />
            </div>
            <form onSubmit={handleSubmit}>
              <Input
                name="userName"
                value={settingsData.userName}
                label="Please provide a username to personalize your quiz experience"
                onChange={handleChange}
              />
              <CategoryButtons
                settingsData={settingsData}
                handleChange={handleChange}
              />
              <DifficultyButtons
                settingsData={settingsData}
                handleChange={handleChange}
              />
              <Button accent>Start Quiz</Button>
            </form>
            {isPending && <LoadingSpinner />}
          </>
        )}
        {isError && <ErrorBox error={error} />}
      </section>
    </div>
  )
}

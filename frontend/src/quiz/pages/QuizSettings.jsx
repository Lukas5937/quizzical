import { useContext, useEffect, useRef } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import Button from '../../UI/Button'
import Symbols from '../../UI/Symbols'
import Input from '../components/Input'
import CategoryButtons from '../components/CategoryButtons'
import DifficultyButtons from '../components/DifficultyButtons'
import CircularProgress from '@mui/material/CircularProgress'
import ErrorBox from '../../UI/ErrorBox'
import useQuizSettingsFetch from '../hooks/useQuizSettingsFetch'

import './QuizSettings.css'
import Footer from '../../UI/Footer'

export default function QuizSettings() {
  const { settingsData, setSettingsData, handleChange } =
    useContext(SettingsContext)
  const initialRender = useRef(true)

  const {
    handleSubmit,
    isPending,
    isError,
    error,
    formIsInvalid,
    setFormIsInvalid,
  } = useQuizSettingsFetch()

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false

      setFormIsInvalid({
        userName: false,
        category: false,
        difficulty: false,
      })

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
  }, [settingsData, setSettingsData, setFormIsInvalid])

  return (
    <>
      <div className="content-container-large">
        <section className="quiz-settings-section">
          {!isError && (
            <>
              <h1>Quiz Settings</h1>
              <Symbols size="small" />
              <form className="form" onSubmit={handleSubmit}>
                <Input
                  name="userName"
                  value={settingsData.userName}
                  label="Please provide a username to personalize your quiz experience"
                  onChange={handleChange}
                  formIsInvalid={formIsInvalid}
                />
                <CategoryButtons
                  settingsData={settingsData}
                  handleChange={handleChange}
                  margin
                  formIsInvalid={formIsInvalid}
                />
                <DifficultyButtons
                  settingsData={settingsData}
                  handleChange={handleChange}
                  formIsInvalid={formIsInvalid}
                />
                <Button color="accent" size="large">
                  {isPending ? (
                    <div className="circular-progress-container">
                      <CircularProgress className="circular-progress " />
                    </div>
                  ) : (
                    'Start game'
                  )}
                </Button>
              </form>
            </>
          )}
          {isError && <ErrorBox error={error} />}
        </section>
        <Footer />
      </div>
    </>
  )
}

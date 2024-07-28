import { useContext, useEffect, useRef } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import Input from '../components/Input'
import CategoryButtons from '../components/CategoryButtons'
import DifficultyButtons from '../components/DifficultyButtons'
import LoadingSpinner from '../../UI/LoadingSpinner'
import ErrorBox from '../../UI/ErrorBox'
import useQuizSettingsFetch from '../hooks/useQuizSettingsFetch'

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
    <section>
      {!isError && (
        <>
          <h2>Quiz Settings</h2>
          <form onSubmit={handleSubmit}>
            <Input
              name="userName"
              value={settingsData.userName}
              label="Please provide a username to personalize your quiz experience."
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
            <button className="button accent">Start Quiz</button>
          </form>
          {isPending && <LoadingSpinner />}
        </>
      )}
      {isError && <ErrorBox error={error} />}
    </section>
  )
}

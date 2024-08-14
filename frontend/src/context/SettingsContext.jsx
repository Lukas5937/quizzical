import { useState, createContext } from 'react'

export const SettingsContext = createContext()

export default function SettingsContextProvider({ children }) {
  const [settingsData, setSettingsData] = useState({
    userName: '',
    category: '',
    difficulty: '',
  })

  const [formIsInvalid, setFormIsInvalid] = useState({
    userName: false,
    category: false,
    difficulty: false,
  })

  const [userNameEdited, setUserNameEdited] = useState(false)

  function onInputBlur() {
    setUserNameEdited(true)
  }

  function handleChange(event) {
    setSettingsData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value.replace(/\s/g, ''),
    }))
    setUserNameEdited(false)
    setFormIsInvalid({ userName: false, category: false, difficulty: false })
  }

  const value = {
    settingsData,
    setSettingsData,
    handleChange,
    userNameEdited,
    onInputBlur,
    formIsInvalid,
    setFormIsInvalid,
  }
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

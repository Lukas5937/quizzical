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

  function handleChange(event) {
    setSettingsData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value.replace(/\s/g, ''),
    }))

    setFormIsInvalid({ userName: false, category: false, difficulty: false })
  }

  const value = {
    settingsData,
    setSettingsData,
    handleChange,
    formIsInvalid,
    setFormIsInvalid,
  }
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

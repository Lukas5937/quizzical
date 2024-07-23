import { useState, createContext } from 'react'

export const SettingsContext = createContext()

export default function SettingsContextProvider({ children }) {
  const [settingsData, setSettingsData] = useState({
    userName: '',
    category: '',
    difficulty: '',
  })

  function handleChange(event) {
    setSettingsData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    })
  }

  const value = { settingsData, setSettingsData, handleChange }
  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  )
}

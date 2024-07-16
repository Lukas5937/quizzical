import SettingsContextProvider from './SettingsContext'
import QuestionsContextProvider from './QuestionsContext'

export default function ContextProviders({ children }) {
  return (
    <SettingsContextProvider>
      <QuestionsContextProvider>{children}</QuestionsContextProvider>
    </SettingsContextProvider>
  )
}

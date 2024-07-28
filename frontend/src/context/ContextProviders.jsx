import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../util/http'
import SettingsContextProvider from './SettingsContext'
import QuestionsContextProvider from './QuestionsContext'
import ResultsContextProvider from './ResultsContext'

export default function ContextProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsContextProvider>
        <QuestionsContextProvider>
          <ResultsContextProvider>{children}</ResultsContextProvider>
        </QuestionsContextProvider>
      </SettingsContextProvider>
    </QueryClientProvider>
  )
}

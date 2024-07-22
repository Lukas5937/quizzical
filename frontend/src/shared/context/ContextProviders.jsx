import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../util/http'
import SettingsContextProvider from './SettingsContext'
import QuestionsContextProvider from './QuestionsContext'

export default function ContextProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingsContextProvider>
        <QuestionsContextProvider>{children}</QuestionsContextProvider>
      </SettingsContextProvider>
    </QueryClientProvider>
  )
}

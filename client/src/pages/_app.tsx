import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime: 500 * 1000,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp


// TODO:
// theme switch
// settings popup
// madeby popup
// hover folder animation
// notes & folders apis
// emoji picker for note
// create folder shortcut
// note input onfocus select folder
// note completed animation
// folder color emoji main colors ??? is it even possible
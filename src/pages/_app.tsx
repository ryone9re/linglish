import { CssBaseline, createTheme, ThemeProvider } from '@mui/material'

import type { AppProps } from 'next/app'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App

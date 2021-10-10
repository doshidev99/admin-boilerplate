import React, { Suspense } from 'react'

import { CircularProgress, CssBaseline, PaletteMode } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'

import { Provider } from 'react-redux'
import { store } from 'app/store'

import { useGlobalContext } from 'context/GlobalContext'
import { getDesignTokens } from 'style/theme'

import 'style/css-variable.css'

export const Providers: React.FC = ({ children }) => {
  const { modeTheme } = useGlobalContext() as {
    modeTheme: PaletteMode
    setModeTheme: (param: string) => void
  }

  const theme = createTheme(getDesignTokens(modeTheme))

  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Suspense fallback={<CircularProgress />}>
          <ToastContainer />
          {children}
        </Suspense>
      </ThemeProvider>
    </Provider>
  )
}

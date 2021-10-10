import { PaletteMode } from '@mui/material'
import dark from './dark'
import light from './light'
import typography from './typography'

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    common: {
      white: '#fff',
    },
    ...(mode === 'light' ? light : dark),
  },
  typography: { ...typography },
})

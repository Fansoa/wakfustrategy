'use client'
 
import { ThemeProvider } from 'styled-components'
import theme from '@/theme/theme'

const CustomThemeProvider = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default CustomThemeProvider;

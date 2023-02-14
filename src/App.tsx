import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/globals'
// import { Home } from './pages/Home'
import router from './routes'
import { RouterProvider } from 'react-router-dom'
import { UsernameProvider } from './contexts/usernameContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <UsernameProvider>
        <RouterProvider router={router} />
      </UsernameProvider>
    </ThemeProvider>
  )
}

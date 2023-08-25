import { ThemeProvider } from 'styled-components'
import { Sign } from './components/Sign'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Sign />
    </ThemeProvider>
  )
}

export default App

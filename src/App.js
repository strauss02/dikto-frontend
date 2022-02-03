import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import WordView from './Components/WordView'
import HomeView from './Components/HomeView'
import SingleWordView from './Components/SingleWordView'
import Appbar from './Components/Appbar'
import { red } from '@mui/material/colors'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import PosView from './Components/PosView'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#50979e',
      dark: 'rgba(113,140,142,0.35)',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#fbc02d',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255,255,255,0.68)',
    },
    background: {
      default: '#d0dcc0',
      paper: '#80c7c9',
    },
    divider: 'rgba(255,255,255,0.12)',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Appbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/:word" element={<WordView />} />
          <Route path="/:word/:pos" element={<SingleWordView />} />
          <Route path="/pos/:part" element={<WordView />} />
          <Route path="/pos" element={<PosView />} />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App

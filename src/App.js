import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import '@fontsource/lato/300.css'
import '@fontsource/lato/400.css'
import '@fontsource/lato/700.css'
import WordView from './Components/WordView'
import HomeView from './Components/HomeView'
import SingleWordView from './Components/SingleWordView'
import Appbar from './Components/Appbar'
import { ThemeProvider } from '@mui/material/styles'
import PosView from './Components/PosView'
import HomeButton from './Components/HomeButton'
import { globalStyle, theme } from './theme'
import GlobalStyles from '@mui/material/GlobalStyles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyle} />
      <div>
        <Appbar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/:word" element={<WordView />} />
          <Route path="/:word/:pos" element={<SingleWordView />} />
          <Route path="/pos/:part" element={<WordView />} />
          <Route path="/pos/:part/:letter" element={<WordView />} />
          <Route path="/pos" element={<PosView />} />
        </Routes>
        <HomeButton />
      </div>
    </ThemeProvider>
  )
}

export default App

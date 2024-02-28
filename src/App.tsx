import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Page1 from './views/Page1'
import Page2 from './views/Page2'
import Home from './views/Home'
import { ConsUrl } from './constants/url'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ConsUrl.Home} element={<Home />} />
        <Route path={ConsUrl.Page1} element={<Page1 />} />
        <Route path={ConsUrl.Page2} element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

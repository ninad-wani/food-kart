import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MenuCard from './components/MenuCard/MenuCard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuCard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

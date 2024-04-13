import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Items from './components/Items/Items'
import MenuCard from './components/MenuCard/MenuCard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuCard />} />
        <Route path='/order' element={<Items />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

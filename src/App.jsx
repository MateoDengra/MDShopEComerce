import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from './components/Navbar'
import { Banner } from './components/Banner'
import { ItemListContainer } from './components/ItemListContainer'
import { Footer } from './components/Footer'
import { NotFound } from './components/NotFound'
import { Productos } from './components/Productos'
import { ItemDetailContainer } from './components/ItemDetailContainer'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<><Banner /> < ItemListContainer/></>} /> 
      <Route path="/Productos" element={<Productos />} />
      <Route path="/Category/:categoryId" element={<ItemListContainer/>} />
      <Route path="item/:itemId" element={<ItemDetailContainer />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
    <Footer />
    </BrowserRouter>
  )
}
export default App
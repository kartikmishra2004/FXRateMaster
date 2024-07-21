import './App.css'
import CurrencyConverter from './components/CurrencyConverter'
import Navbar from './components/Navbar'
import Wellcome from './components/Wellcome'
import About from './components/About'
import FAQ from './components/FAQ'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Wellcome />}></Route>
          <Route exact path='/convert' element={<CurrencyConverter />}></Route>
          <Route exact path='/about' element={<About />}></Route>
          <Route exact path='/faq' element={<FAQ />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

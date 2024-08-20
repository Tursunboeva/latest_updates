
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home'
import { Single } from './routes/Single'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/single' element={<Single />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

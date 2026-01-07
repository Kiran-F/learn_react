import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
      {/* Navigation */}
      <Header />

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Routes>

      <Footer />
      
    </BrowserRouter>

      {/* <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route> */}
    </>
  )
}

export default App

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import TournamentList from './components/TournamentList'
import Contact from './pages/Contact'
import Register from './pages/Register'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/tournament/:id" element={<TournamentList />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

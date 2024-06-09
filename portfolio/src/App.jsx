import './App.css'
import About from './Components/About'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects'
import Education from './Components/Education'
import Contact from './Components/Contact'

function App() {


  return (
    <Router>
     <NavBar/>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Routes>
        <Route path='/education' element={<Education />} />
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
   </Router>
        
  )
}

export default App

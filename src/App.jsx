import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../src/Component/Home/Home.jsx'
import About from '../src/Component/About/About.jsx'
import Contact from '../src/Component/Contact/Contact.jsx'
import Service from '../src/Component/Service/Service.jsx'
import Header from '../src/Component/Header/Header.jsx'
import Foot from './Component/Footer/Foot.jsx'
import * as $ from "jquery"

function App() {
  

  return (
    <>
    
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Foot />
    </Router>
    
    
     
    </>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from '../src/Component/Home/Home.jsx'
import About from '../src/Component/About/About.jsx'
import Contact from '../src/Component/Contact/Contact.jsx'
import Service from '../src/Component/Service/Service.jsx'
import Header from '../src/Component/Header/Header.jsx'
import Foot from './Component/Footer/Foot.jsx'
import VisaService from './Component/Service/VisaService.jsx'
import Mice from './Component/Service/Mice.jsx'
import Tourpackages from './Component/Service/Tourpackages.jsx'
import AirTickets from './Component/Service/AirTickets.jsx'
import Studyvisa from './Component/VisaServices/Studyvisa.jsx'
import Travel from './Component/VisaServices/Travel.jsx'
import Corporate from './Component/VisaServices/Corporate.jsx'
import Familyvisa from './Component/VisaServices/Familyvisa.jsx'
import Permanent from './Component/VisaServices/PermanentSettlementVisa.jsx'

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
        <Route path="/visaservice" element={<VisaService/>} />
        <Route path="/mice" element={<Mice/>} />
        <Route path="/tourpackages" element={<Tourpackages/>} />
        <Route path="/airticket" element={<AirTickets/>} />
        <Route path="/studyvisa" element={<Studyvisa/>} />
        <Route path="/travelvisa" element={<Travel/>} />
        <Route path="/corporate" element={<Corporate/>} />
        <Route path="/familyvisa" element={<Familyvisa/>} />
        <Route path="/permanent" element={<Permanent/>} />
      </Routes>
      <Foot />
    </Router>
    
    
     
    </>
  )
}

export default App

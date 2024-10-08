import './App.css'
 import Contact from './Pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  // import Navbar from './Components/Navbar'
import MainPage from './Pages/MainPage'
import RaisingFundform from './Components/RaisingFundform'
import FundraiserPage from './Components/FundraiserPage';
import Navbar from './Components/Navbar';
import Raisefundform2 from './Components/Raisefundform2';
    
function App() {
  return (
    <>
      
    <Router>
      <Navbar/>
        <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/raiser' element={<RaisingFundform/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<FundraiserPage/>}/>
        <Route path='/login' element={<Raisefundform2/>}/>

      </Routes>
    </Router>
    {/* <Navbar/> */}
    </>

  )
}

export default App

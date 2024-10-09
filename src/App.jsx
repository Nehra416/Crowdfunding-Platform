import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import Raisefundform2 from './Components/Raisefundform2';
import FoundPage from './Pages/FoundPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/fund" element={<FoundPage />} />
        </Routes>
      </Router>
    </>

  )
}

export default App

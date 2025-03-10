import './App.css'
import CatAbout from './components/CatAbout';
import HomeScreen from './components/HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  

  return (
    <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/cat/:id" element={<CatAbout/>} />  {/* Route for CatAbout */}
            </Routes>
        </Router>
  )
}

export default App

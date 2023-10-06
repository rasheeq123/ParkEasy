import './App.css';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/home" element ={<Home/>} />
            <Route path="/login" element ={<Login/>} />
            <Route path="/signup" element ={<Signup/>} />
            <Route path="/about" element ={<About/>} />


        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
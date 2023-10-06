import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/home" element ={<Home/>} />


        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
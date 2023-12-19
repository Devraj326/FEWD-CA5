import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Register from './pages/Register'
import Home from './pages/Home'
function App(){
  return(
    <div className='App
    '>
      {/* <Navbar/>  */}
      <div className='Body'>
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/Register' element={<Register/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
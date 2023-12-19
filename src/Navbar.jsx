import {Link} from "react-router-dom"
import logo from './assets/sidebar-3d-logo.svg'
import './Navbar.css'

function Heading() {
  return (
    <div className="navbar">
     <Link to="/"> 
            <img src={logo} alt="" />
            <p>Kalvium Books</p>
          </Link>
     
     <ul>
     <li><Link to="/register"><button class="custom-btn btn-7"><span>Register</span></button></Link></li>
      
      
    </ul>
    </div>
  )
}

export default Heading
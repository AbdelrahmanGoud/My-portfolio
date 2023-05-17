import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
function Navgation()
{   let logonav = `<GoudaDev/>`

     return(
       <>
          <Navbar bg="light" expand="lg" className='nav-perant px-3 fixed-top'>
        <Link to='/' className='nav-logo'>{logonav}</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to='/' className='N-link'>Home</Link>
            <Link to='/About' className='N-link'>About</Link>
            <Link to='/Servicesec' className='N-link'>Services</Link>
            <Link to='/Myskills' className='N-link'>Skills</Link>
            <Link to='/Projects' className='N-link'>Projects</Link>
            <Link to='/Contact' className='N-link'>Contact</Link>

          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
       </>   
     )     
}
export default Navgation;
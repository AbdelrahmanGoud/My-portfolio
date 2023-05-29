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
            <div className='nav-icons S-case'>
          <span className='icon-one px-2'><a href='https://github.com/AbdelrahmanGoud'><i class="fa-brands fa-github nav-i"></i></a></span>
          <span className='icon-two px-2'><a href="mailto:abdoahmed132001@gmail.com"><i class="fa-regular fa-envelope nav-i"></i></a></span>
          <span className='icon-tree px-2'><a href='https://wa.me/+201148952582'><i class="fa-brands fa-whatsapp nav-i"></i></a></span>
          <span className='icone-four px-2'><a href='tel:01148952582'><i class="fa-solid fa-phone nav-i"></i></a></span>
        </div>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
       </>   
     )     
}
export default Navgation;
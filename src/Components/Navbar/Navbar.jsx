import React, { useEffect,useState } from 'react'
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css'
import manu_icon from '../../assets/menu-icon.png'
import logo from '../../assets/logoorg.png'

function Navbar() {
  const [sticky, setsticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setsticky(true);
      } else {
        setsticky(false);
      }
    });
  }, []);

  const [mobileMenu, setmobileMenu] = useState(false)
  const toggleMenu = () => {
   mobileMenu ? setmobileMenu(false) : setmobileMenu(true)

  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
     <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-manu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-230} duration={500} className='btn'>Contact us</Link></li>
      </ul>   
      <img src={manu_icon} alt="" className='manu-icon'onClick={toggleMenu}/>    
     </nav>
  )
}

export default Navbar
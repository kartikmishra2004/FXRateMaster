import React, { useState } from 'react'
import '../App.css'
import logo from '../assets/logo.svg'
import hamMenu from '../assets/ham-menu.svg'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [burger, setBurger] = useState('hidden');
  const handleNav = () => {
    if (burger === 'hidden') {
      setBurger('flex');
    }
    else{
      setBurger('hidden')
    }
  }
  return (
    <div className='navbar flex justify-between lg:px-16 px-4 w-[100%] lg:h-[6rem] h-[5rem] text-zinc-300 fixed'>
      <div className='flex items-center'>
        <Link to='/'><img className='w-7 h-7 mr-2' src={logo} alt="logo" /></Link>
        <Link to='/'><h1 className="lg:text-[1.7rem] text-xl cursor-pointer font-semibold">FXRateMaster</h1></Link>
      </div>
      <div className="lg:flex hidden lg:gap-14 gap-6 tracking-wider cursor-pointer text-lg items-center" id="navItems">
        <Link to='/' className="group">
          Home
          <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
        </Link>
        <Link to='/convert' className="group">
          Convert currency
          <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
        </Link>
        <Link to='/about' className="group">
          About us
          <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
        </Link>
        <Link to='/faq' className="group">
          FAQ
          <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
        </Link>
        <Link to='/contact' className="group">
          Contact us
          <div className="w-0 group-hover:w-full h-0.5 bg-white ease-in-out duration-500"></div>
        </Link>
      </div>
      <div id="hamburger" className="lg:hidden flex fa fa-bars items-center text-xl"><img onClick={handleNav} className='w-7 h-7 invert' src={hamMenu} alt="" srcSet="" /></div>
      <div id="mobileNav"
        className={`${burger} mobilenav bg-[#151835] text-zinc-200 z-10 lg:hidden fixed items-center flex-col gap-8 py-[3rem] px-4 text-2xl h-max inset-0 top-[4.9rem] w-[100%] ease-in-out duration-500 cursor-pointer`}>
        <Link onClick={handleNav} to='/'>Home</Link>
        <Link onClick={handleNav} to='/convert'>Convert currency</Link>
        <Link onClick={handleNav} to='/about'>About us</Link>
        <Link onClick={handleNav} to='/faq'>FAQ</Link>
        <Link onClick={handleNav} to='/contact'>Contact us</Link>
      </div>
    </div>
  )
}

export default Navbar
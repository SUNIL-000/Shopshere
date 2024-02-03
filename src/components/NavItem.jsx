// import React from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";


// import {} from 'react-icon/f'

const NavItem = () => {
  return (
    <>

    <ul className=' list-none flex items-center py-2 gap-1 md:gap-3 text-[#4a4848] font-bold transition text-md md:text-lg '>
        <li className=' hover:text-[#D98880] '>
            <Link to={'/'}><AiFillHome style={{fontSize:"25px"}} /></Link>
        </li>
        <li className='  hover:text-[#D98880] '>
            <Link to={'/search'}><FaSearch style={{fontSize:"22px"}} /></Link>
        </li>
        <li className='  hover:text-[#D98880] '>
            <Link to={'/cart'}><FaShoppingCart style={{fontSize:"25px"}}/></Link>
        </li>

    </ul>
    </>
  )
}

export default NavItem
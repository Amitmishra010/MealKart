import React, { useContext, useState } from 'react'

import icon from "../assets/icon.png"
import search from "../assets/search.png"
import basket from "../assets/basket.png"
import { Link,useNavigate } from 'react-router-dom';
import ExploreMenu from './ExploreMenu'; 
import Footer from './Footer';
import { StoreContext } from '../context/storeContext';
import profile_icon from '../assets/profile_icon.png'
import bag_icon from '../assets/bag_icon.png'
import logout_icon from '../assets/logout_icon.png'
function Navbar({setShowLoginPopup}) {
    
    const [menu,setMenu]=useState("home");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.removeItem("token");
        setToken("")
        navigate("/")
    }
    return (
        <div className="flex items-center justify-between w-full pr-1.5 bg-white" >
            <Link to='/'><img src={icon} alt="Logo" className="w-15 h-15 object-contain mr-2"/></Link>
            <ul className="flex list-none gap-x-4 text-1xl text-blue-950 font-serif ">
                <Link to='/' onClick={()=>setMenu("home")}  className={`cursor-pointer ${menu==="home"?`active:pb-0.5 border-b-2`:""}`}>Home</Link>
                <a  href='#ExploreMenu' onClick={()=>setMenu("menu")}  className={`cursor-pointer ${menu==="menu"?`active:pb-0.5 border-b-2`:""} `}>Menu</a>
                <a href='#app-download' onClick={()=>setMenu("mobile-app")}  className={`cursor-pointer ${menu==="mobile-app"?`active:pb-0.5 border-b-2`:""}`}>Mobile-App</a>
                <a href='#Footer' onClick={()=>setMenu("contact-us")}  className={`cursor-pointer ${menu==="contact-us"?`active:pb-0.5 border-b-2`:""}`}>Contact us</a>
            </ul>
            <div className="flex  items-center gap-2.5 px-2 ">
                <img src={search} alt="search bar" className="w-8 h-8 object-contain mr-2" />
                <div className="relative">
                <Link to='/cart'><img  src={basket} alt="basket icon" className="w-8 h-8 object-contain mr-2 bg-white" /></Link>
                {/*this below div dot is when we add something in basket it will shows up otherwise empty*/}
            <div className={getTotalCartAmount()===0?"":"absolute w-4 h-4 flex justify-center items-center bg-black rounded-4xl bottom-5 left-5"}><p></p></div> 
                </div>
                
               {!token? <button onClick={()=>setShowLoginPopup(true)} className="bg-transparent text-[16px] transition hover:bg-amber-300 text-blue-950 border-2 border-black px-1 py-1.5 rounded-4xl cursor-pointer"> Sign In</button>:<div className='navbar-profile group relative' >
                <img className='size-7' src={profile_icon} alt="" />
                <ul className="nav-profile-dropdown absolute right-0 z-1 hidden flex-col group-hover:flex gap-[10px] bg-[#fff2ef] px-[12px] py-[25px] rounded-[4px] border-amber-600 outline-white list-none">
                    <li onClick={()=>navigate('/myorders')} className='flex items-center gap-[10px] cursor-pointer hover:text-amber-700' > <img className='w-[20px]' src={bag_icon} alt="" />Orders</li>
                    <hr />
                    <li onClick={logout} className='flex items-center gap-[10px] cursor-pointer  hover:text-amber-700'><img className='w-[20px]' src={logout_icon} alt="" />Logout</li>
                </ul>
                </div>}
            </div>
        </div>
    )
}

export default Navbar

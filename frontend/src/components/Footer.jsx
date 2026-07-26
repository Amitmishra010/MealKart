import React from 'react'
import icon from "../assets/icon.png"
import facebook from "../assets/facebook_icon.jpg"
import twitter from "../assets/twitter_icon.jpg"
import insta from "../assets/insta_icon.jpg"
function Footer() {
    return (
        <div className='text-white bg-amber-800 flex flex-col items-center gap-5 p-[20px_8vw] pt-20 mt-1.5' id='Footer'>
            <div className="footer-content w-100% grid grid-cols-[2fr_1fr_1fr] gap-20">
                <div className="footer-content-left flex flex-col items-start gap-5">
                    <img className='w-30' src={icon} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, possimus? Pariatur eos asperiores qui natus dolorum ea aliquid expedita optio a magnam iste!</p>
                    <div className='social-media flex flex-row gap-5'>
                        <img className='w-10 m-2.5' src={facebook} alt="" />
                        <img className='w-10 m-2.5' src={twitter} alt="" />
                        <img className='w-10 m-2.5' src={insta} alt="" />
                    </div>
                </div>
                <div className="footer-content-center  flex flex-col items-start gap-5">
                        <h2 className='text-white font-medium text-2xl'>COMPANY</h2>
                        <ul className='list-none mb-2.5'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy Policy</li>
                        </ul>
                </div>
                <div className="footer-content-right  flex flex-col items-start gap-5">
                        <h2 className='text-white font-medium text-2xl'>Get In Touch</h2>
                        <ul className='list-none mb-2.5'>
                            <li>+123-3456-7654</li>
                            <li>achgn@gmail.com</li>
                        </ul>
                </div>
            </div>
        <hr className='w-full m-[20px_0] h-0.5 bg-gray-500 border-none' />
        <p className="footer-copyright">
            Copyright 2026 -All rights reserved
        </p>
        </div>
    )
}

export default Footer

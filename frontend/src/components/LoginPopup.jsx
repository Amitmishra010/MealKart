import React, { useState } from 'react'
import cross_icon from "../assets/cross_icon.png"
import { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import axios from "axios"
function LoginPopup({setShowLoginPopup}) {
    const [currState,setCurrState]=useState("Sign Up")
    const {url,setToken}=useContext(StoreContext)
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setData(data=>({...data,[name]:value}))
    }
    const onLogin=async (event)=>{
        event.preventDefault()
        let newUrl=url
        if(currState=="Login"){
            newUrl+="/api/user/login"
        }else{
            newUrl+="/api/user/register"
        }
        const response=await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token)
            localStorage.setItem("token",response.data.token)
            setShowLoginPopup(false)
        }
        else{
            alert(response.data.message)
        }

    }
    return (
        <div className='absolute grid z-1 w-full h-full bg-gray-500 '>
            
            <form onSubmit={onLogin} className='login-popup-container place-self-center w-[min(23vw,330px)] text-[#808080] bg-white flex flex-col gap-6.25 p-[25px_30px] rounded-2xl font-medium animation-[fadeIn_0.5s]'>
                <div className='login-popup-title flex justify-between items-center text-black' >
                    <h2>{currState}</h2>
                    <img className='w-4 cursor-pointer' onClick={()=>setShowLoginPopup(false)} src={cross_icon} alt="" />
                </div>
                <div className="login-popup-input flex flex-col gap-5 ">
                    {currState==="Login"?<></>:<input className='outline-none border p-2.5 rounded-xs' name='name'onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' />}
                    {/*we can add required here also*/}
                    <input className='outline-none border p-2.5 rounded-xs' name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='email' />
                    <input className='outline-none border p-2.5 rounded-xs' name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' /> {/*/here also*/}
                </div>
                <button type='submit' className='border p-2.5 rounded-xs bg-amber-600 text-white font-medium cursor-pointer'>{currState==="Sign Up"?"create account":"Login"}</button>
                <div className='flex gap-1.5 mt-2.5 items-start '> 
                    <input className='mt-1.5 ' type="checkbox" />
                    <p >By continuing, I agree to the terms of use & privacy policy.</p>
                    </div>
                    {currState==='Login'?<p>Create a new account? <span className='text-amber-600 font-medium cursor-pointer' onClick={()=>setCurrState("Sign Up")}>Sign Up here</span></p>:
                    <p>Already have an account? <span className='text-amber-600 font-medium cursor-pointer' onClick={()=>setCurrState("Login")}>Click here</span></p>}
                    
                    
            </form>
        </div>
    )
}

export default LoginPopup

import React, { useContext, useState } from 'react'
import {food_list} from "../assets/assets.js"
import rating_starts from "../assets/rating_starts.png"
import { useSearchParams } from 'react-router-dom'
import add_icon_img from '../assets/add_icon_img.png'
import remove_icon from "../assets/remove_icon.jpg"
import { StoreContext } from '../context/storeContext.jsx'
function FoodItem(food_list) {
    //  const [itemCount,setItemCount]=useState(0)
     const {cartItem,addToCart,removeFromCart,url}=useContext(StoreContext)
     
    return (
        <div className='w-full m-auto rounded-1xl shadow-[0px_0px_10px] shadow-[#00000015]  animatio-[fadeIn_1s]'>
            <div className='relative '>
                <img  className="w-full rounded-t-2xl" src={food_list.image} alt={food_list.name} />
                
                {
                    
                    !cartItem[food_list.id]?<img className='absolute w-8.75 bottom-3.75 right-3.75 cursor-pointer rounded-[50%]' onClick={()=>addToCart(food_list.id)} src={add_icon_img} alt=''/>
                    :<div className="absolute  bottom-3.75 right-3.75 flex items-center gap-2.5 p-1.5 rounded-[50px] bg-white">
                        <img className='w-7.5' onClick={()=>removeFromCart(food_list.id)} src={remove_icon} alt="" />
                        <p>{cartItem[food_list.id]}</p>
                        <img className="w-7.5" onClick={()=>addToCart(food_list.id)}  src={add_icon_img} alt="" />
                         </div>
                }
            </div>
            <div className="p-5">
                <div className='flex justify-between items-center mb-2'>
                    <p className='text-[20px] font-medium'>{food_list.name}</p>
                    <img className='w-17.5' src={rating_starts} alt="" />
                </div>
                <p className='text-[#676767] text-[17px]'>{food_list.description}</p>
                
                <p className='text-amber-700 text-[22px] font-medium m-[10px_0px]'>${food_list.price}</p>
            </div>
        </div>
    )
}

export default FoodItem

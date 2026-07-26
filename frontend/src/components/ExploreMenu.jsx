import React from 'react'
import { menu_list } from '../assets/assets.js'
const  ExploreMenu=({category,setCategory})=>{
    return (
        <div className="flex flex-col gap-5" id='ExploreMenu'>
            <h1 className="text-black font-medium text-3xl">Explore our Menu</h1>
            <p className="max-w-[60%] caret-olive-200">Choose from a diverse Menu featuring a delectable array</p>
            <div className="flex justify-between items-center gap-4 text-center m-[20px,0px] overflow-x-scroll no-scrollbar">
                
                {menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
                            <img className={ `${category===item.menu_name?"border-2 border-amber-600 p-2":""} w-[7.5vw] min-w-20 cursor-pointer rounded-[50%] transition-[0.2s] `} src={item.menu_image} alt="" />
                            <p className='mt-{10px} text-gray-500 font-[min(1.4vw,16px)] cursor-pointer'>{item.menu_name}</p>
                        </div>
                    )
                })}
               
            </div>
            <hr className='m-[10px,0px] h-0.5 bg-[#e2e2e2] border-none' />
        </div>
    )
}

export default ExploreMenu

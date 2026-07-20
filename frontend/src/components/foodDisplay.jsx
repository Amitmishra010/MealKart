import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/storeContext'
import FoodItem from './foodItem'

function FoodDisplay({category}) {
    {/*we will get the foodlist array using context api*/}
    const {food_list}=useContext(StoreContext)
    return (
        <div className='mt-7.5'>
            <h2 className='text-[max(2vw,24px)] '>Top dishes near you</h2>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-7.5 gap-7.5'>
                {food_list.map((item,index)=>{
                    {console.log(category,item.category)}
                    if(category==='All'||category===item.category){
                        return (
                        <FoodItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price}/>
                    )
                    }
                    
                })}
            </div>
        </div>
    )
}

export default FoodDisplay

import React, { useContext,useEffect } from 'react'
import { StoreContext } from '../context/storeContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const   {cartItem,food_list,removeFromCart,getTotalCartAmount,url,token}=useContext(StoreContext)
    const navigate=useNavigate();
    
       

    return (
        <div className='cart mt-25'>
            <div className='cart-items'>
                <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-600 font-[min(1vw,12px)]">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item,index)=>{
                        if(cartItem[item._id]>0){
                            return(
                                <div>
                                    <div className='cartItems-item flex flex-row  justify-between m-[10px_0px] text-black'>
                                    <img className='w-12.5' src={item.image} alt="" />
                                    <p  className=''>{item.name}</p>
                                    <p className=''>${item.price}</p>
                                    <p className=''>{cartItem[item._id]}</p>
                                    <p className=''>${item.price*cartItem[item._id]}</p>
                                    <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>X</p>
                                </div>
                                <hr />
                                </div>
                                
                            )
                        }
                })}
            </div> 
                <div className="cart-bottom m-20 flex justify-between gap-[min(12vw,20px)]">
                    <div className="cart-total flex-1 flex flex-col gap-5">
                        <h2 className='text-[20px] font-medium px-2.5'>Cart Totals</h2>
                        <div className='px-2.5 py-0.5' >
                            <div className="cart-total-details flex justify-between text-[#555] py-1">
                                <p>Subtotal</p>
                                <p>₹{getTotalCartAmount()}</p>
                            </div>
                            <hr className='m-[10px_0px]' />
                            <div className="cart-total-details flex justify-between text-[#555] py-1">
                                <p>Delivery Fee</p>
                                <p>₹{0}</p>
                            </div>
                            <hr className='m-[10px_0px]' />
                            <div className="cart-total-details flex justify-between text-[#555] py-1">
                                <b>Total</b>
                                <b>₹{getTotalCartAmount()}</b>
                            </div>
                        </div>
                        <div className='px-2.5 py-1.5'>
                            <button onClick={()=>navigate('/order')} className='border-none text-white bg-amber-600 w-[min(15vw,200px)] p-[12px_0px] rounded-sm cursor-pointer'>Procced To Buy </button>
                        </div>
                        
                    </div>
                    <div className="cart-promocode flex-1 ">
                        <div>
                            <p className='text-[#555] py-1'>If you have PromoCode, Enter it here</p>
                            <div className='cart-promocode-input mt-2.5 flex justify-between items-center bg-[#eaeaea] rounded-sm'>
                                <input className='bg-transparent border-none outline-none pl-2.5' type="text" placeholder='promocode'/>
                                <button className='w-[min(10vw,150px)] p-[12px_5px] bg-black text-white border-none rounded-sm'>Apply</button>
                            </div>
                        </div>
                        </div>
                </div>
        </div>
    )
}

export default Cart

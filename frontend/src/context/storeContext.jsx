import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const StoreContext=createContext(null)

const StoreContextProvider=(props)=>{
    const [cartItem,setCartItem]=useState({});
    const url=import.meta.env.VITE_BACKEND_URL;
    const [token,setToken]=useState("")
    const [food_list,setFoodList]=useState([])
    //now we will create functionality for add to cart or remove to cart
    const addToCart= async(itemId)=>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>(
                {    ...prev,
                    [itemId]:1,
                }))
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    }
    const removeFromCart=async(itemId)=>{
        if(cartItem[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }
        if(token){
            await axios.post(url+"/api/cart/remove",{itemId},{headers:{token}})
        }
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItem){
            if(cartItem[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                    totalAmount+=itemInfo.price*cartItem[item];
            }
        }
        return totalAmount;
    }
//fetch food list
    const fetchFoodList=async()=>{
        const response=await axios.get(url+"/api/food/list")
        console.log(response.data.data)
        setFoodList(response.data.data)
        //we will call this function when our page is loaded so it's function is in useeffect
    }
    const loadCartData=async (token)=>{
        const response=await axios.post(url+"/api/cart/get",{},{headers:{token}})
        setCartItem(response.data.cartData);
    }
    useEffect(()=>{
        
        async function loadData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
            await loadCartData(localStorage.getItem("token"))
        }
        }
        loadData()
    },[])
    const contextValue={
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;
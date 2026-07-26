import React, { useState } from 'react'
import Header from '../components/header.jsx'
import ExploreMenu from '../components/ExploreMenu.jsx'
import FoodDisplay from '../components/foodDisplay.jsx'

function Home() {
    const [category,setCategory]=useState("All")


    return (
        <div >
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category} />
        </div>
    )
}

export default Home

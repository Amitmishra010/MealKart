import React, { useEffect } from 'react'

import { useNavigate, useSearchParams } from 'react-router-dom'
function Verify() {
    const navigate=useNavigate();
    const [searchParams]=useSearchParams();
    useEffect(()=>{
        const success=searchParams.get("success");
        if(success==="true"){
            alert("Payment successful");
            navigate("/myorders")
        }
        else{
            alert("Payment failed")
            navigate("/cart")
        }
    },[])
    return (
        <div className="flex justify-center items-center h-screen">
            <h2 className="text-2xl font-semibold">
                Verifying Payment...
            </h2>
        </div>
    )
}

export default Verify

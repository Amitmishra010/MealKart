import React from 'react'

function Header() {
    return (
        <div className="h-[90vh] m-7.5 bg-[url('/header_img4.png')]  rounded-b-2xl bg-cover relative ">
            {/*content of header*/}
            <div className="absolute flex flex-col items-start gap-1.5 max-w-[50%] bottom-[10%] left-[6vw] animate-[fadeIn_3s_ease-in-out]">
                <h2 className="font-medium text-white text-[min(4.5vw,70px)]">Order your favourite food here</h2>
                <p className="text-white text-[2vw]">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinery expertise.</p>
                <button className="border-none text-gray-500 font-medium px-1.5 py-2.5 bg-white text-[min(1vw,13px)] rounded-2xl">View Menu</button>
            </div>
        </div>
    )
}

export default Header

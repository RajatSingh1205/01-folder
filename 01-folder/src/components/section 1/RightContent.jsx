import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from "./RightCard.jsx";

const RightContent = ({ users }) => {
    return (
        <div className='overflow-x-auto h-full flex gap-10 p-6 w-[70%]'>
            {
                users.map((elem, index) => (
                    <RightCard key={index} img={elem.img}/>
                ))
            }
        </div>
    )
}

export default RightContent

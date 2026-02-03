import React from 'react'
import LeftContent from "./LeftContent.jsx";
import RightContent from "./RightContent.jsx";

const PageOneContent = (props) => {
    return (
        <div className='py-3 items-center flex justify-between h-full bg-white-400 px-10 '>
            <LeftContent/>
            <RightContent users={users}/>
        </div>
    )
}
export default PageOneContent

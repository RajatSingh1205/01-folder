import React from 'react'
import Navbar from "./Navbar.jsx";
import PageOneContent from "./PageOneContent.jsx";

const Section1 = ({users}) => {
    return (
        <div className="h-screen w-full flex flex-col">
            <Navbar/>
            <PageOneContent users={users}/>
        </div>
    )
}
export default Section1
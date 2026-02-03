import React from 'react'
import Section1 from "./components/section 1/Section1.jsx";
import Section2 from "./components/section 2/Section2.jsx";


const App = () => {

    const users = [
        {
            img : 'https://i.pinimg.com/1200x/31/5b/2f/315b2fca6bfc715eef70b30bf6c68ff8.jpg',

        },
        {
            img : 'https://i.pinimg.com/1200x/31/5b/2f/315b2fca6bfc715eef70b30bf6c68ff8.jpg',

        },
        {
            img : 'https://i.pinimg.com/1200x/31/5b/2f/315b2fca6bfc715eef70b30bf6c68ff8.jpg',

        }

    ]
    return (
        <>

            <Section1 users = {users}/>
            <Section2/>
        </>
    )
}
export default App

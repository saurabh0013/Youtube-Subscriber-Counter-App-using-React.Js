import React from 'react'
import Description from '../Components/Description'


function Home(){
    return(
    <div className= " p-3">
        <h1 className= "text-3xl font-bold border-t border-b p-3 text-gray-600 "> HOME</h1>
        <Description name = "Home" />
    </div>
    )
}

export default Home
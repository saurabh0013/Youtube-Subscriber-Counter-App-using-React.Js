import React from 'react'
import Description from '../Components/Description'
function View(){
    return(
    <div className= " p-3">
        <h1 className= "text-3xl font-bold border-t border-b p-3 text-gray-600">ABOUT</h1>
        <Description name = "About" />

   </div>
   )
}

export default View
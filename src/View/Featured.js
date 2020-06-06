import React, { useState } from 'react'
import axios from 'axios'
import Description from '../Components/Description'
function Featured(){
   
        
    return(
    <div className= " p-3">
        <h1 className= "text-3xl font-bold border-t border-b p-3 text-gray-600">FEATURED CONTENT</h1>
        <Description name = "About" />

   </div>
   )
}

export default Featured
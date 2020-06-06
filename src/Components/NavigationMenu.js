import React from 'react'
import{Link } from 'react-router-dom'


function NavigationMenu(props){
    return(
        <div>
        <span className="text-2xl font-bold text-gray-600 p-3">MENU</span>
          
       
         
           
          
        <ul className="text-red-500 text-xl p-3" >
        
         <li className=" border-b border-t py-3">
         <Link to = '/' onClick = {props.closeMenu}> 
         Home
         </Link>
         </li>
        
         <li className=" border-b border-t py-3">
         <Link to = '/about' onClick = { props.closeMenu}>
         About 
         </Link>
         </li>
        
         <li className=" border-b border-t py-3">
         <Link to = '/featured' onClick = { props.closeMenu}>
         Featured
         </Link>
         </li>
        
         </ul>


        </div>

    
    )
}
 export default NavigationMenu
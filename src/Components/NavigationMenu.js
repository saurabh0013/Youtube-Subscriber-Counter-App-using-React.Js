import React from 'react'
import{Link } from 'react-router-dom'




function NavigationMenu(props){
    return(
        <div>
        <span className="text-2xl font-bold text-gray-600 p-3">MENU</span>
          
       
         
           
          
        <ul className="text-red-500 text-l p-3" >
        <Link to = '/' onClick = {props.closeMenu}> 
         <li className=" border-b border-t py-3">
       
         Home
        
         </li>
         </Link>
        
         <Link to = '/featured' onClick = { props.closeMenu}>
         <li className=" border-b border-t py-3">
         
         Featured
         </li>
         </Link>
       

         <Link to = '/about' onClick = { props.closeMenu}>
         <li className=" border-b border-t py-3 focus:bg-red-400">
        
         About 
         </li>
         </Link>
         
        
        
         </ul>

      
        </div>

    
    )
}
 export default NavigationMenu
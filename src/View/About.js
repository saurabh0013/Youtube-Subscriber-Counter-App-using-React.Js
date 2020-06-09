import React from 'react'
import me from './assets/me.jpg'
function View(){
    return(
    <div className= " p-3">
        <h1 className= "text-2xl font-bold border-t border-b p-3 text-gray-600">ABOUT</h1>
        <p className =" px-3 text-gray-600">
            <br/> 
            This app is made only for learning purpose not for any money making purpose.
            This app takes data form youtube api.<br/>
            This app is made using React and it shows the subscriber count of any youtube channel you want to know.
            There are subscriber count of some of the leading youtube individual creators featured for you.
            <br/> <br/>
            <img src={me} alt="img saurabh" className=" rounded-full h-40 w-40"/>
            Developer : Saurbah Pratap Singh
            </p>
            <p  className="px-3 text-green-500"> <a href="https://github.com/saurabh0013">See my projects @ GitHub</a> </p> 
            <p className="px-3 text-red-400"><a href="mailto:saurabh.sps.13@gmail.com"> mail me : saurabh.sps.13@gmail.com</a>
            
        </p>
        
   </div>
   )
}

export default View
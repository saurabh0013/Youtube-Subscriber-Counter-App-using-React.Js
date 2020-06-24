import React from 'react'
import me from './assets/me.jpg'
function View(){
    return(
    <div >
        <h1 className= "text-2xl font-bold border-t border-b p-3 text-gray-600">ABOUT</h1>
        <p className =" px-3 text-gray-600">
            <br/> 
            This app is made only for learning purpose.
            It takes data form YouTube Dta Api V3.<br/>
            This app is made using React.Js and it shows the subscriber count of any youtube channel you want to know.
            There are subscriber count of some of the top individual creators in the Featured section for you.
            You can see the source code for this app and my other projects in my <a href="https://github.com/saurabh0013" ><button className="bg-green-500 text-white shadow-2xl font-bold rounded-full py-2 px-4"> GitHub</button></a> repository. 
            If you want to contact me or give any suggestions you can mail me at <a href="mailto:saurabh.sps.13@gmail.com"><button  className=" bg-red-400 text-white shadow-2xl  rounded-full py-2 px-4">  saurabh.sps.13@gmail.com</button></a>. 
            <br/> <br/>
            <img src={me} alt="img saurabh" className=" rounded-full h-40 w-40 "/>
            <strong>
            Developer : Saurbah Pratap Singh
            </strong>
            </p>
           
              
            <p className="bg-black w-full text-blue-600 py-3 px-3 absolute bottom-0 my-10">Go to options menu at top right corner in Chrome browser and Click on Add to home screen to get a full screen interface experience</p>    
           
            
        
        
   </div>
   )
}

export default View
import React from 'react'



function Home(){

    async function getsubs(){

        
    const baseUrl = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='
    const apiKey='&key=AIzaSyC-qZToT6ZsYLnlQ0hp404e8tF3jD7jYTI' 
    
    var channelId = document.getElementById('userInput').value

    if(channelId === ""){
        alert("Opps! You forgot to enter channel Id")
        return
    }


        const response = await fetch(baseUrl+channelId+apiKey)
        const data = await response.json()
        document.getElementById('subs').innerText= `Subscribers : ${data.items[0].statistics.subscriberCount} ` 
        document.getElementById('userInput').value = ""    
    }
    return(
    <div >
        <h1 className= "text-2xl font-bold border-t border-b p-3 text-gray-600 "> HOME</h1>
       
        <center>
             <p> <input type="text" id="userInput" placeholder=" Enter Channel Id"  className=" outline-none bg-gray-200 focus:bg-blue-100 px-2 py-2 m-10"></input></p>
             <p><button onClick = {getsubs} id="searchBtn" className="outline-none focus:bg-gray-400  px-2 bg-red-500 text-white rounded px-4 py-2">Show Subscribers</button></p>
                    <br/>
             <h2><span id="subs" className= "text-xl font-bold border-t border-b p-3"></span></h2>
            
             <p className="bg-black w-full text-blue-600 py-3 px-3 absolute bottom-0 my-10">This is a testing version. We currently do not support search by Channel Name  but it will be  available soon.</p>
             
        </center>
    </div>
    )
}

export default Home
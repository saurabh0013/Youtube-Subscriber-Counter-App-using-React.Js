import React from 'react'



function Home(){

  async function getsubs(){

        
    const baseUrl1 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='
    const baseUrl2 = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='
    const apiKey='&key=AIzaSyC-qZToT6ZsYLnlQ0hp404e8tF3jD7jYTI' 
    
    
    var searchText = document.getElementById('userInput').value

    if(searchText === ""){
        alert("Opps! You forgot to enter channel Name")
        return
    }
       try { 
            const response = await fetch(baseUrl1+searchText+apiKey)
            const data = await response.json()
            
            
            const channelId = data.items[0].snippet.channelId
            console.log(channelId);
            
            document.getElementById('title').innerText= `${data.items[0].snippet.title}`
            document.getElementById('img').src= data.items[0].snippet.thumbnails.default.url
           
     
       
            const responseSubs = await fetch(baseUrl2+channelId+apiKey)
            const dataSubs = await responseSubs.json()
            document.getElementById('subs').innerText= `Subscribers : ${dataSubs.items[0].statistics.subscriberCount} `
            document.getElementById('userInput').value = ""
     
       }

       catch(err){
           alert('Opps!! Somethig went wrong. No results found. Refresh the page and try again.')
       }
        
        
       
           
    }
    return(
    <div >
        <h1 className= "text-2xl font-bold border-t border-b p-3 text-gray-600 "> HOME</h1>
       
        <center>
             <p> <input type="text" id="userInput" placeholder=" Enter Channel Name"  className=" outline-none bg-gray-200 focus:bg-blue-100 px-2 py-2 m-10"></input></p>
             <p><button onClick = {getsubs} id="searchBtn" className="outline-none  px-2 bg-red-500 text-white rounded px-4 py-2">Show Subscribers</button></p>
                    <br/>
             <div id="result" className= "text-xl font-bold p-3">
                    <h2><span id="title"></span></h2>
                     <img id="img" className="rounded-full" />
             
                    <h2><span id="subs" ></span></h2>
            </div>
            
            
             
        </center>
    </div>
    )
}

export default Home
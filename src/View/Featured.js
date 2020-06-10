import React from 'react'
import bhuwan from './assets/bhuwan.jpg'
import carry from './assets/carry.jpg'
import ashish from './assets/ashish.jpg'
import amit from './assets/amit.jpg'

function Featured(){
    
   
async function getsubs(){
    const baseUrl = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id='
    const apiKey='&key=AIzaSyC-qZToT6ZsYLnlQ0hp404e8tF3jD7jYTI' 
    
  // Carrymynati

    const channelIdCarry = 'UCj22tfcQrWG7EMEKS0qLeEg'
    const responseCarry =await fetch(baseUrl+channelIdCarry+apiKey);
    const dataCarry = await responseCarry.json();
    const subscriberCountCarry = dataCarry.items[0].statistics.subscriberCount
    console.log(subscriberCountCarry);
    document.getElementById('carry').innerText= subscriberCountCarry;
   

    //AmitBhadana
     
    const channelIdAmit = 'UC_vcKmg67vjMP7ciLnSxSHQ'
    const responseAmit =await fetch(baseUrl+channelIdAmit+apiKey);
    const dataAmit = await responseAmit.json();
    const subscriberCountAmit = dataAmit.items[0].statistics.subscriberCount
    console.log(subscriberCountAmit);
    document.getElementById('amit').innerText= subscriberCountAmit;

  

    //Bhuwan Bam 
    const channelIdBhuwan = 'UCqwUrj10mAEsqezcItqvwEw'
    const responseBhuwan =await fetch(baseUrl+channelIdBhuwan+apiKey);
    const dataBhuwan = await responseBhuwan.json();
    const subscriberCountBhuwan = dataBhuwan.items[0].statistics.subscriberCount
    console.log(dataBhuwan);
    document.getElementById('bhuwan').innerText= subscriberCountBhuwan;

    
    //Ashish Chanchalani
    const channelIdAshish = 'UC7eHZXheF8nVOfwB2PEslMw'
    const responseAshish =await fetch(baseUrl+channelIdAshish+apiKey);
    const dataAshish = await responseAshish.json();
    const subscriberCountAshish = dataAshish.items[0].statistics.subscriberCount
    console.log(subscriberCountAshish);
    document.getElementById('ashish').innerText= subscriberCountAshish;
    
    
    
}
     getsubs();
   


    return(
 
    <div className= " p-3">
        <h1 className= "text-2xl font-bold border-t border-b p-3 text-gray-600">FEATURED CONTENT</h1>
        <div class="lds-roller"></div>
            <div className="float-left mr-5 my-10 ml-5">
                <img src={bhuwan} className=" rounded-full h-16 w-16" alt="Bhuwan"  />
                <p className="font-bold ">Bhuwan Bam</p>
                <p>Subscriber :<br/> <span id="bhuwan"></span></p>
            </div>
            <div className="float-left mr-5 ml-5 my-10">
                <img src={carry} className="rounded-full h-16 w-16" alt="carry"  />
                <p className="font-bold"> Carrymynati</p>
                <p>Subscriber :<br/> <span id="carry"></span></p>
            </div>
            <div className="float-left mr-5 ml-5 my-10">
                <img src={amit} className="rounded-full h-16 w-16" alt="amit"  />
                <p className="font-bold">Amit <br/>Bhadana</p>
                <p>Subscriber :<br/> <span id="amit"></span></p>
            </div>
            <div className="float-left mr-5 ml-5 my-10">
                <img src={ashish} className="rounded-full h-16 w-16" alt="Ashish"  />
                <p className="font-bold">Ashish <br/> Chanchalani </p>
                <p>Subscriber :<br/> <span id="ashish"></span></p>
            </div>
        

   </div>
   )
}

export default Featured
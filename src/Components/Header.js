import React from 'react'

import Navigation from './Navigation'

function Header(){
    return(
        <header className="bg-red-600  border-b p-3 flex justify-between items-center">
        <span className="text-2xl text-white font-bold ">
        YouTube Subscriber Viewer
        </span>
        
        <Navigation />
        </header>
    )
}

export default Header
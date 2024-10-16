"use client"
import React from 'react'
import './navbar.css' 
import { useState } from 'react'



const NavbarSection = () => {

    const  [greeting , setGreeting]= useState('')

function  handleClick(userName ){

    return (

        alert(`Bonjour  Madame Monsieur 
            ${userName}`)
    )
}

return (
    <div className='navbar'>

 <input placeholder='Enter your name' className='inputsection' value={greeting} onChange={(e)=>setGreeting(`${e.target.value}`)}/>

<button className='bouton' onClick={()=>handleClick(greeting)}>submit </button>


    </div>
  )
}

export default NavbarSection

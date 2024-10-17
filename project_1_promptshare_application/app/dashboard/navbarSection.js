"use client"
import React from 'react'
import './navbar.css' 
import { useState } from 'react'



const NavbarSection = () => {

const  [greeting , setGreeting]= useState('') ; 
let status = true ; 

function  handleClick(userName){

    return (
  <div>

    {`Bonjour  Madame Monsieur 
            ${userName}`}
  </div>
   

    )
}

return (
<div className='navbar'>
<input placeholder='Enter your name' className='inputsection' value={greeting} onChange={(e)=>setGreeting(`${e.target.value}`)}/>


<button className='bouton' onClick={()=>handleClick(greeting)}>submit </button>
<p className='greeting'>{handleClick(greeting)}</p>

    </div>
  )
}

export default NavbarSection

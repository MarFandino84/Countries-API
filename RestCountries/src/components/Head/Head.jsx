import React from 'react'
import { HeadStyles } from './HeadStyles'
import { FaMoon } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const Head = () => {
  
    const[darkMode, setDarkMode] = useState(true)

    useEffect(() => {
       
      if(darkMode == true) {
          document.body.style.backgroundColor = "hsl(0, 0%, 100%)"
          document.querySelectorAll("article").forEach(x => {
            x.style.backgroundColor = "hsl(0, 0%, 100%)"
            document.body.querySelectorAll("a").forEach(x => {
              x.style.color ="black"
            })     
          })   
      }
      if(darkMode == false) {
       document.body.style.backgroundColor = " hsl(207, 26%, 17%)"
       document.querySelectorAll("article").forEach(x => {
         x.style.backgroundColor = "hsl(209, 23%, 22%)"
       document.body.querySelectorAll("a").forEach(x => {
         x.style.color ="white"
       })
       })   
     }
     
    },[darkMode])
  
    return (
    <>
      <HeadStyles>
         <h2>Where in the World</h2>
     
         <div>
         <FaMoon /> <button onClick={() => setDarkMode(!darkMode)}>Dark Mode</button>
        </div>
         </HeadStyles>
     

    </>
  )
}

export default Head

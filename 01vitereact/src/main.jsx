import { StrictMode } from 'react'
import React from 'react'
import  ReactDom  from 'react-dom/client'
import App from './App.jsx'


// Create a function
function MyApp(){
  return(
    <div>Custom MyApp</div>
  )
}

//  This is is incorrect
// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   childern:'click me to visit google'
// }


const  anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


const anotheruser="Chai Pilo"  // Create varible
// Create reactElement / Tree
const reactElement=React.createElement(
  'a',   // first parameter is  tag
  {href:'https://google.com' , target:'_blank'}, // Second parameter is object(Set Attribute)
  'Click me to visit Google',  // Direct Text
  anotheruser   // Inject varible
)


ReactDom.createRoot(document.getElementById('root')).render(
  
  reactElement
 
)

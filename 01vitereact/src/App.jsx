import React from 'react';
import Chai from './chai';


function App() {
  // How to Inject Javascript Varibles
  const username="Chai With Dhnaish"
  return (
    <>
    <Chai/>
    <h1>This is Chai {username}</h1>
    <p>Hello Chai</p>
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react'

function App() { 
  // useState function returned two variables: counter and changeCounter
  // counter variable = 1 because it passed in the useState function
  // changeCounter function can be used to change the counter variable
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter
  return (
    <div>
      <h1>{ counter }</h1>
      <h4>{ counter }</h4>
    </div>
  )
}

export default App
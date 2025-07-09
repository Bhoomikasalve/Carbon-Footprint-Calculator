import { useState } from 'react'

import './App.css'
import CarbonFootprintCalculator from './Carbon'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <CarbonFootprintCalculator />
      
   

    </>
  )
}

export default App

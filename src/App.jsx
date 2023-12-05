import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import NavBar from './Pages/navBar'
import Container from 'react-bootstrap/esm/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar />
    </>
  )
}

export default App

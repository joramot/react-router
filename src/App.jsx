import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

const NAVIGATE_EVENT = 'pushstate'

function navigate (href){
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(NAVIGATE_EVENT)
  window.dispatchEvent(navigationEvent)
}

function Home(){
  return(
  <>
    <h1> Home Router React Clone</h1>
    <p>Ejemplo de creacion de React Router (clonado) </p>
    <a href='/about'>ir a sobre nosotros </a>
  </>
  )
}

function About(){
  return(
  <>
    <h1> About Router React Clone</h1>
    <p>Saludos!!, mi nombres es Jose </p>
    <a href='/'>Ir a Home</a>
  </>
  )
}

function App() {  
  const [currentPath, setCurrrentPath] = useState(window.location.pathname)

  useEffect (()=>{
    const onLocationChange = () => {
      setCurrrentPath(window.location.pathname)
    }

    window.addEventListener(NAVIGATE_EVENT, onLocationChange)

    return () => (
      window.removeEventListener(NAVIGATE_EVENT, onLocationChange)
    )
  }, [])

  return (
  <main>
    {currentPath === '/' && <Home />}
    {currentPath === '/about' && <About />}
  </main>
  )
}

export default App

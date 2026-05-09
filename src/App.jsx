import { useEffect, useState } from 'react'
import Cards from './components/Cards'

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect (()=> {
    console.log("effect once")
  }, [])

  return (
    <Cards />
  )
}

export default App
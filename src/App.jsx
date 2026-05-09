import { useEffect, useState } from 'react'
import Cards from './components/Cards'

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect (()=> {
    const fetchData = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters')
        const data = await response.json()
        console.log(data);  
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Cards />
  )
}

export default App
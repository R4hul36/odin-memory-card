import { useEffect, useState } from 'react'
import Cards from './components/Cards'

const App = () => {
  const [characters, setCharacters] = useState([])

  const charaNames = []

  useEffect (()=> {
    const fetchData = async () => {
      try {
        const response = await fetch('https://hp-api.onrender.com/api/characters')
        const data = await response.json()
        const requiredData = data.slice(0,16).map(character => {
          const {name, image} = character
          return {name, image}
        })
        setCharacters(requiredData) 
         
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <Cards characters = {characters}/>
  )
}

export default App
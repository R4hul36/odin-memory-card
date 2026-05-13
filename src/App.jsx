import { useEffect, useState } from 'react'
import Cards from './components/Cards'
import './styles/app.css'
import shuffleCards from './helpers/shuffleCards'

const App = () => {
  const [characters, setCharacters] = useState([])

  const charaNames = []

  const handleClick = () => {
    let shuffledCharacters = shuffleCards(characters)
    setCharacters(shuffledCharacters)
  }

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
    <>
    <h1>Harry Potter Memory Game</h1>
    <Cards characters = {characters} onCardClick = {handleClick}/>
    </>
  )
}

export default App
import { useEffect, useState } from 'react'
import Cards from './components/Cards'
import './styles/app.css'
import shuffleCards from './helpers/shuffleCards'

const App = () => {
  const [characters, setCharacters] = useState([])
  const [score, setScore] = useState(0)
  const [rememberedCards, setRememberedCards] = useState([])

  const charaNames = []

  const handleClick = (name) => {
    // after clicking a card check if the remembered cards array already has the same character, if so set score to zero and set remembered cards to empty array
    //else increment the score by 100 and add the current character to the remembered array
    if(rememberedCards.includes(name)){
      setScore(0)
      setRememberedCards([])
      return
    }

    setScore(prevScore => prevScore+=100)
    setRememberedCards(prevCards => [...prevCards, name])

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
    <div className="game-container">
      <div className='score-container'>Score: {score}</div>
      <Cards characters = {characters} onCardClick = {handleClick}/>
    </div>
    </>
  )
}

export default App
import React from 'react'
import Card from './Card';
import '../styles/cards.css'

const Cards = ({characters, onCardClick}) => {
  console.log(characters);
  
  return (
    <div className='cards'>
      {characters.map(character => {
        return <div className="card" key={character.name} onClick={onCardClick}>
          <Card character = {character} />
        </div>
      })}

    </div>
  )
}

export default Cards
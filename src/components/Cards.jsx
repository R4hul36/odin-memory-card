import React from 'react'
import Card from './Card';

const Cards = ({characters}) => {
  console.log(characters);
  
  return (
    <div className='cards'>
      {characters.map(character => {
        return <div className="card" key={character.name}>
          <Card character = {character} />
        </div>
      })}

    </div>
  )
}

export default Cards
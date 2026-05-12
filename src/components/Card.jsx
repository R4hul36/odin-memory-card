import React from 'react'
import '../styles/card.css'

const Card = ({character}) => {
  const {name, image} = character    
  return (
    <div className='char-details'>
        <img src={image} alt={name + " image"} />
        <p>{name}</p>
    </div>
  )
}

export default Card
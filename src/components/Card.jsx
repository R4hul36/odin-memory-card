import React from 'react'

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
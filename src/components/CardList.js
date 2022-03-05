// src/CardList.js
import React from 'react';
import './CardList.css'
import Card from './Card';
import data from './/card-data.json'

function CardList() {
  
  const cards = data.map(( { title, desc, images } ) => {
    return (
      <Card
        name={title}
        description={desc}
        image={images[0]}
      />
    )
  })

  return (
    <div className="CardList">
      { cards }
    </div>
  )
}

  
export default CardList
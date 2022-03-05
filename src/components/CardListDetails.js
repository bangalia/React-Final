// src/CardListDetails.js

import React from 'react'
import { useParams } from 'react-router'
import data from './card-data.json'

function CardListDetails(props) {
  const params = useParams()
  const { id } = params // Location index
  const { images, title, desc } = data[id]

  return (
    <div>
      <div>
        <img src={`${process.env.PUBLIC_URL}images/${images[0]}`} alt={title} />
      </div>

      <div>
        <h2>{ title }</h2>
        <p>{ desc }</p>
      </div>

    </div>
  )
}

export default CardListDetails
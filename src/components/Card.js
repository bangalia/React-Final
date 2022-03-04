// src/Card.js

import logo from './logo.svg'
import './Card.css'

function Card(props) {
  const { name, image, address } = props
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
        <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default Card
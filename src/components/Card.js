// src/Card.js

//import logo from './logo.svg'
import './Card.css'

function Card(props) {
  const { name, image, description } = props
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="300"
        height="300"
        alt="Hello"
      />
        <h2>{name}</h2>
      <div>{description}</div>
    </div>
  )
}

export default Card
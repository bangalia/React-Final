// src/CardList.js
import './CardList.css'
import Card from './components/Card';

function CardList() {
    return (
      <div>
        <h1>Keep your eye on this space for future content...</h1>
        <div>
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    )
  }
  
  export default CardList
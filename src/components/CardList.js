// src/CardList.js
import './CardList.css'
import Card from './Card';

function CardList() {
    return (
        <div className="CardList">
          <Card
            name="Fun Fact"
            description="There are more than 400 species of aloe vera"
            image="aloe.jpg"
          />
          <Card
            name="Did you know?"
            description="Aloe vera plants grow over 3ft tall."
            image="gel.jpg"
          />
          <Card
            name="Fun Fact"
            description="Aloe vera has been used for over 6,000 years!"
            image="egypt.jpg"
          />
        </div>
    )
}
  
export default CardList
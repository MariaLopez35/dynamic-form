import { Container, Row } from 'react-bootstrap';
import './FirstStep.css';
import CardFruit from './CardFruit';
import { useState } from 'react';

export const fruits = [
  {
    id: 1,
    icon: "🍅",
    name: "Tomato",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 2,
    icon: "🫐",
    name: "Blueberries",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: 3,
    icon: "🍌",
    name: "Banana",
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

export default function FirstStep() {

  const [selectedCard, setSelectedCard] = useState(null);

  const clickCard = (fruit) => {
    setSelectedCard(fruit.id);
    localStorage.setItem('fruitName', fruit.name);
    localStorage.setItem('iconName', fruit.icon);
  }

  console.log(selectedCard);

  return (
    <div>
      <h2>Choose your favourite fruit</h2>
      <h4>Select your fruit and then click the button of "Next Step"</h4>
      <Container className='P-5 text-center'>
        <Row>
          {fruits.map((fruit, index) => (
            <CardFruit fruit={fruit} key={index}  clickCard={clickCard} selectedCard={selectedCard} />
          ))}
        </Row>
      </Container>
    </div>
  )
}
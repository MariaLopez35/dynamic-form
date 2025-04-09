import { Col, Card } from 'react-bootstrap';

export default function CardFruit({ fruit, clickCard, selectedCard }) {

    const { name, description, icon, id } = fruit;

    return (
        <Col className={`card-fruit mt2 ${selectedCard === fruit.id ? 'selected-card' : ''}`} onClick={() => clickCard(fruit)} key={id}>
            <Card >
                <Card.Body>
                    <Card.Title>{icon}</Card.Title>
                    <Card.Subtitle>{name}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
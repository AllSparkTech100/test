import { Col, Row, Container, Card } from "react-bootstrap";
import "./button.scss";

function Data() {
  const menu = [
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2012/1/27/0/GT0307_Grilled-Rice-Balls_s4x3.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://www.foodnetwork.com/content/dam/images/food/fullset/2012/1/27/0/GT0307_Grilled-Rice-Balls_s4x3.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1259679_8-2ab6a74.jpg?quality=90&resize=440,400",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
  ];
  return (
    <Container fluid className="p-5">
      {menu.map((items) => {
        <Row>
          return (
          <Col key={items.id}>
            <Card style={{ width: "12rem" }}>
              <Card.Img variant="top" src={items.img} />
              <Card.Body>
                <Card.Title className="d-flex align-items-center justify-content-between">
                  {items.title} <span>{items.price}</span>
                </Card.Title>
                <Card.Text>{items.ingredients}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          );
        </Row>;
      })}
    </Container>
  );
}

export default Data;

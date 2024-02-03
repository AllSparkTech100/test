import { Col, Row, Button, Container } from "react-bootstrap";
import "./button.scss";
import wine from "../Photos/wines.jpg";

function Data() {
  const menu = [
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
      img: { wine },
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
        return (
          <Row key={items.id} className="d-flex" gap={1}>
            <Col md={2} sm={12}>
              <img src={items.img} className="img-fluid" alt={items.title} />
              <h3 className="d-flex">
                {items.title} <span>{items.price}</span>
              </h3>
              <p>{items.title}</p>
              <Button className="btn">Order Now</Button>
            </Col>
            <Col md={2} sm={12}>
              
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default Data;

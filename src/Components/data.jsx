import { Col, Row, Container, Card, Button } from "react-bootstrap";
import "./button.scss";
import "../Photos/wines.jpg";
// import

function Data() {
  const menu = [
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "../Photos/wines.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "wines",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "../Photos/wines.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "../Photos/wines.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 1,
      title: "Grilled Beef with Potatoes",
      img: "../Photos/wines.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
  ];

  return (
    <Container fluid className="p-md-5 menuu">
      <Row gap={1}>
        {menu.map((items) => {
          return (
            <Col key={items.id} md={4} sm={12} className="mt-4">
              <Card className="border-0 h-100">
                <Card.Img
                  variant="top"
                  className="img-fluid h-auto"
                  src={items.img}
                />
                <Card.Body>
                  <Card.Title className="d-flex align-items-center justify-content-between">
                    {items.title} &nbsp;{" "}
                    <span className="fw-bold" style={{ color: "#898989" }}>
                      {items.price}
                    </span>
                  </Card.Title>
                  <Card.Text style={{ color: "#787878" }}>
                    {items.ingredients}
                  </Card.Text>
                </Card.Body>
                <Button className="w-100 btn border-0">Order Now</Button>
              </Card>
            </Col>
          );
        })}
      </Row>
      ;
    </Container>
  );
}

export default Data;

import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";

function Dinner() {
  const menu = [
    {
      id: 1,
      title: "Delicious Pasta",
      img: "https://www.allrecipes.com/thmb/5SdUVhHTMs-rta5sOblJESXThEE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/11691-tomato-and-garlic-pasta-ddmfs-3x4-1-bf607984a23541f4ad936b33b22c9074.jpg",
      ingredients: "Tomato and Garlic Pasta",
      price: "$30",
    },
    {
      id: 2,
      title: "Jollof Rice",
      img: "https://i.pinimg.com/originals/c5/f9/47/c5f9471cf4f47e8eb991ec1822b1d24b.jpg",
      ingredients: "Grilled Fish and Jollof Rice",
      price: "$20",
    },
    {
      id: 3,
      title: "Fufu and Egusi Soup",
      img: "https://twistofvegan.com/wp-content/uploads/2023/05/Fufu-002-cropped.jpg",
      ingredients: "Deliciously prepared for you",
      price: "$15",
    },
    {
      id: 4,
      title: "Porridge Beans",
      img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
      ingredients: "Beans and Plantain",
      price: "$20",
    },
    {
      id: 6,
      title: "Grilled Beef with Potatoes",
      img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 7,
      title: "Grilled Beef with Potatoes",
      img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Grilled-Fillet-Steak.png",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 8,
      title: "Grilled Beef with Potatoes",
      img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 8,
      title: "Grilled Beef with Potatoes",
      img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
  ];
  return (
    <div>
      <main className="">
        <div className="bg-image menu_intro">
          <div className="about_text">
            <h3 className="text-white text-center">Specialties</h3>
            <p className="text-center">
              <a href="/" className="text-white fw-normal">
                Home
              </a>
            </p>
          </div>
        </div>
        <section>
          <Category />
          <Container>
            <Row className="breakfast">
              {menu.map((items) => {
                return (
                  <Col key={items.id} md={3} sm={12} className="mt-4">
                    <Card className="border-0 h-100">
                      <Card.Img
                        variant="top"
                        className="img-fluid h-75"
                        src={items.img}
                      />
                      <Card.Body>
                        <Card.Title className="d-flex fs-6 align-items-center justify-content-between">
                          {items.title} &nbsp;{" "}
                          <span
                            className="fw-bold"
                            style={{ color: "#898989" }}
                          >
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
          </Container>
        </section>
      </main>
    </div>
  );
}

export default Dinner;

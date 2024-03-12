import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";
import "./pages.scss";

function Lunch() {
    const menu = [
        {
          id: 1,
          title: "Egg Salad",
          img: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/04/Egg-Salad-main-1.jpg",
          ingredients: "Tasty Egg Salad",
          price: "$20",
        },
        {
          id: 2,
          title: "Pasta Salad",
          img: "https://tastesbetterfromscratch.com/wp-content/uploads/2023/05/Italian-Pasta-Salad-23-3.jpg",
          ingredients: "Salad made from pasta",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Grilled-Fillet-Steak.png",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Grilled-Fillet-Steak.png",
          ingredients: "Meat,Fish, Beef, Potato",
          price: "$20",
        },
        {
          id: 1,
          title: "Grilled Beef with Potatoes",
          img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/11/Grilled-Fillet-Steak.png",
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
        <Category/>
        </section>
      </main>
    <Container>
    <Row className="breakfast">
          {menu.map((items) => {
            return (
              <Col key={items.id} md={3} sm={12} className="mt-4">
                <Card className="border-0 h-100">
                  <Card.Img
                    variant="top"
                    className="img-fluid"
                    src={items.img}
                  />
                  <Card.Body>
                    <Card.Title className="d-flex fs-6 align-items-center justify-content-between">
                      {items.title} &nbsp;{" "}
                      <span className="fw-bold" style={{ color: "#898989" }}>
                        {items.price}
                      </span>
                    </Card.Title>
                    <Card.Text style={{ color: "#787878" }}>
                      {items.ingredients}
                    </Card.Text>
                  </Card.Body>
                  <Button className="w-100 btn order_btn">Order Now</Button>
                </Card>
              </Col>
            );
          })}
        </Row>
    </Container>
    </div>
  )
}

export default Lunch
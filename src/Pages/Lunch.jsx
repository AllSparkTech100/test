import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";
import "./pages.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Lunch() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
      once: false,
    });
  });
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
      img: "https://cdn.jwplayer.com/v2/media/VQjhS08r/poster.jpg?width=720",
      ingredients: "Salad made from pasta",
      price: "$20",
    },
    {
      id: 3,
      title: "Grilled Cheese Sandwich",
      img: "https://mayihavethatrecipe.com/wp-content/uploads/2014/04/the-best-grilled-cheese-sandwich-wp-square-photo.jpg",
      ingredients: "Snadwich Cheese",
      price: "$20",
    },
    {
      id: 4,
      title: "Fresh Tomato Soup",
      img: "https://therecipecritic.com/wp-content/uploads/2022/10/tomatosoup.jpg",
      ingredients: "Delicious tomato soup",
      price: "$20",
    },
    {
      id: 5,
      title: "Ham Sandwich",
      img: "https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg",
      ingredients: "Delicious Ham Sandwiches",
      price: "$20",
    },
    {
      id: 6,
      title: "Club Sandwich",
      img: "https://www.foodandwine.com/thmb/tM060YA0Fd0UALCmPQ-5gGWyBqA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Classic-Club-Sandwich-FT-RECIPE0523-99327c9c87214026b9419b949ee13a9c.jpg",
      ingredients: "Turkey, lettuce tomato crispy-bacon",
      price: "$20",
    },
    {
      id: 7,
      title: "Sandwich",
      img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Bologna_sandwich.jpg",
      ingredients: "Sandwich and Milk",
      price: "$20",
    },
    {
      id: 8,
      title: "Fried Egg Sandwich",
      img: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/12/egg1-1200x675.jpg",
      ingredients: "Made from Eggs",
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
            <Row className="lunch">
              {menu.map((items) => {
                return (
                  <Col
                    data-aos="fade-up"
                    key={items.id}
                    md={6}
                    lg={3}
                    sm={12}
                    className="mt-4"
                  >
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
                      <Button className="w-100 btn order_btn">Order Now</Button>
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

export default Lunch;

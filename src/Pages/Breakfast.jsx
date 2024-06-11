import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";
import "./pages.scss";

function Breakfast() {
  const menu = [
    {
      id: 1,
      title: "Pancakes",
      img: "https://www.allrecipes.com/thmb/WqWggh6NwG-r8PoeA3OfW908FUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21014-Good-old-Fashioned-Pancakes-mfs_001-1fa26bcdedc345f182537d95b6cf92d8.jpg",
      ingredients: "Delicious Pancakes made for you",
      price: "$20",
    },
    {
      id: 2,
      title: "Cinnamon Rolls",
      img: "https://plantbasedonabudget.com/wp-content/uploads/2014/05/Vegan-Cinnamon-Rolls-Plant-Based-on-a-Budget-1-2.jpg",
      ingredients: "Delicious Vegan Cinnamon Rolls",
      price: "$20",
    },
    {
      id: 3,
      title: "Tomato Omelletes",
      img: "https://realfood.tesco.com/media/images/1400x919-Tesco-5For15-13273-RainbowOmelette-b3f0c3cc-2f15-40a7-98b1-07af0609f99e-0-1400x919.jpg",
      ingredients: "Tomatoes",
      price: "$20",
    },
    {
      id: 4,
      title: "Fried Eggs",
      img: "https://garlicdelight.com/wp-content/uploads/20210411-pan-fried-egg-sandwich-8.jpg",
      ingredients: "Delicious Fried eggs",
      price: "$20",
    },
    {
      id: 5,
      title: "Coffee",
      img: "https://img.freepik.com/free-photo/delicious-coffee-beans-cup_23-2150691429.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1710201600&semt=sph",
      ingredients: "Healthy Morning Coffee",
      price: "$20",
    },
    {
      id: 6,
      title: "Cinnamon Toast",
      img: "https://ketogenic.com/wp-content/uploads/2019/09/keto-cinnamon-toast-crunch.jpg",
      ingredients: "Specially made to fill you",
      price: "$20",
    },
    {
      id: 7,
      title: "Granola",
      img: "https://www.culinaryhill.com/wp-content/uploads/2021/01/How-to-Make-Granola-Culinary-Hill-1200x800-1.jpg",
      ingredients: "Granola and Strawberries",
      price: "$20",
    },
    {
      id: 8,
      title: "Egg Muffins",
      img: "https://mommachef.com/wp-content/uploads/2017/02/BlogDelEGGMuffins.jpg",
      ingredients: "Delicious Egg Muffins",
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
                      <Card.Body className="mt-md-3">
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

export default Breakfast;

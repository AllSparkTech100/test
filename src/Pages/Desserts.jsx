import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./pages.scss";

function Dessert() {
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
      title: "Chocolate Cup-Cake",
      img: "https://sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 2,
      title: "Rose Granita",
      img: "https://www.ediblenm.com/wp-content/uploads/2018/04/A84A2183.jpg",
      ingredients: "Strawberry Granita",
      price: "$90",
    },
    {
      id: 3,
      title: "Pomegranate",
      img: "https://static01.nyt.com/images/2017/02/08/dining/08JPBAKING1/08JPBAKING1-superJumbo.jpg",
      ingredients: "Special Just for You",
      price: "$40",
    },
    {
      id: 4,
      title: "Sweet Filipino Tofu",
      img: "https://i.pinimg.com/736x/1a/23/79/1a23791337aa5a5bc256e3de91b9b009.jpg",
      ingredients: "Delicious",
      price: "$90",
    },
    {
      id: 5,
      title: "Flora Meningues",
      img: "https://www.floatingkitchen.net/wp-content/uploads/2016/02/Caramel-Chocolate-Meringues-2.jpg",
      ingredients: "Meat,Fish, Beef, Potato",
      price: "$20",
    },
    {
      id: 6,
      title: "Yoghurts",
      img: "https://d6h7vs5ykbiug.cloudfront.net/wp-content/uploads/2012/08/vanilla-bean-homemade-yogurt-recipe-4.jpg",
      ingredients: "Vanilla Yoghurts",
      price: "$20",
    },
    {
      id: 7,
      title: "Iced Coffee",
      img: "https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505",
      ingredients: "Coffee",
      price: "$20",
    },
    {
      id: 8,
      title: "Whisky Maple Chicken",
      img: "https://www.thehungryhutch.com/wp-content/uploads/2018/09/Whiskey-Maple-Chicken-Wings-0.jpg",
      ingredients: "Chicken Wings",
      price: "$78",
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
                Home &gt;
              </a>
            </p>
          </div>
        </div>
        <section>
          <Category />
          <Container>
            <Row className="desserts">
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

export default Dessert;

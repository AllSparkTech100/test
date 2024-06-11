import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";
import "./pages.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Drinks() {
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
      title: "Espresso Martini",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/espresso-martini-f099531.jpg?resize=768,574",
      ingredients: "Espresso ",
      price: "$60",
    },
    {
      id: 2,
      title: "Gimlet",
      img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gimlet-version-002-f4152d0.jpg?resize=768,574",
      ingredients: "Gimlet Special",
      price: "$22",
    },
    {
      id: 3,
      title: "Old Fashioned",
      img: "https://cdn.shopify.com/s/files/1/0416/5599/2469/files/old-fashioned-classic-recipe.png?v=1659714695",
      ingredients: "Old fashioned recipe",
      price: "$210",
    },
    {
      id: 4,
      title: "Negroni",
      img: "https://www.sipandfeast.com/wp-content/uploads/2023/10/negroni-facebook.jpg",
      ingredients: "Best and Classic Negroni",
      price: "$120",
    },
    {
      id: 5,
      title: "PassionFruit Martini",
      img: "https://www.crowdedkitchen.com/wp-content/uploads/2021/01/passion-fruit-martini-11.jpg",
      ingredients: "Classic Martini",
      price: "$120",
    },
    {
      id: 6,
      title: "Mimosa",
      img: "https://www.simplyrecipes.com/thmb/MnlLWvXlfxmfsT0aDvxxJzicUYU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2020__04__Orange-Mimosa-LEAD-3-993b1a0de5e2479c9e1a8b8a5330e1e0.jpg",
      ingredients: "Special Malibu Mimosa",
      price: "$90",
    },
    {
      id: 7,
      title: "Smirnoff Ice",
      img: "https://media.diageocms.com/media/nmndqjqp/ice-franchise-header-02-mobile.jpg",
      ingredients: "Smirnoff Drink",
      price: "$220",
    },
    {
      id: 8,
      title: "Pepsi",
      img: "https://i0.wp.com/www.globaltrademag.com/wp-content/uploads/2021/10/shutterstock_image-7.png?fit=757%2C393&ssl=1",
      ingredients: "Sweet Taste",
      price: "$120",
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
            <Row className="drinks">
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

export default Drinks;

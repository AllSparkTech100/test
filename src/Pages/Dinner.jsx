import { Col, Row, Container, Card, Button } from "react-bootstrap";
import Category from "./Category";
import "./pages.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Dinner() {
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
      img: "https://allnigerianfoods.com/wp-content/uploads/2015/02/porridge-beans.jpg",
      ingredients: "Beans and Plantain",
      price: "$20",
    },
    {
      id: 6,
      title: "Pizza Orzo",
      img: "https://foodhub.scene7.com/is/image/woolworthsltdprod/2301-vegan-pepperoni-pizza-pasta-bake:Square-1300x1300",
      ingredients: "Delicious Pizza Orzo",
      price: "$20",
    },
    {
      id: 7,
      title: "Baked Salmon",
      img: "https://www.kitchensanctuary.com/wp-content/uploads/2020/05/Honey-Garlic-Baked-Salmon-square-FS-111.jpg",
      ingredients: "Deliciously Baked Salmon",
      price: "$20",
    },
    {
      id: 8,
      title: "Smothered Chicken",
      img: "https://kitchenfunwithmy3sons.com/wp-content/uploads/2021/11/Southern-Smothered-Chicken-65.jpg",
      ingredients: "Delicious",
      price: "$20",
    },
    {
      id: 8,
      title: "Chicken Stir-Fry",
      img: "https://www.halfbakedharvest.com/wp-content/uploads/2021/08/25-Minute-Black-Pepper-Jalapen%CC%83o-Basil-Chicken-Stir-Fry-1.jpg",
      ingredients: "Chicken stirfry and Rice.",
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
            <Row className="dinner" >
              {menu.map((items) => {
                return (
                  <Col data-aos="fade-up" key={items.id} md={6}
                lg={3}
                sm={12} className="mt-4">
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
                      <Button className="w-100 order_btn btn ">Order Now</Button>
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

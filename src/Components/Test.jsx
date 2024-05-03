// import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container, Row, Col, Card } from "react-bootstrap";
// import CircleImage from "./CircleImage";
import "./button.scss";

function Test() {
  // const testimony = [
  //   {
  //     id: 1,
  //     name: "Ian Boner",
  //     img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
  //     text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
  //     title: "Customer",
  //   },
  // ];
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <div className="test_carrier">
              <div className="test_inner">
                <div className="test_img">
                  <img src="" alt="" />
                </div>

                <div className="test_text">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis eaque libero officiis iure, necessitatibus
                    incidunt laudantium quae itaque fuga earum recusandae quo
                    optio, aut ut maiores. Suscipit eum voluptas consectetur
                    nisi ipsam deleniti perferendis facere, dolore dolorum nam
                    saepe necessitatibus numquam libero architecto delectus esse
                    alias porro. Consequatur, officiis nobis!
                  </p>
                </div>
                <div className="test_name">
                  <h4>Ian Boner</h4>
                  <p className="tex-muted">Customer</p>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Test;

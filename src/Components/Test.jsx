import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Container, Row, Card } from "react-bootstrap";
import CircleImage from "./CircleImage";
import "./button.scss";

function Test() {
  const testimony = [
    {
      id: 1,
      name: "Ian Boner",
      img: "https://veganinthefreezer.com/wp-content/uploads/2021/05/Grilled-Potato-Wedges-angled-square-sp.jpg",
      text: "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
      title: "Customer",
    },
  ];
  return (
    <Container>
      <Row>
      <Splide 
        options={{
            perPage: 3,
            arrows: false,
            pagination: true,
            drag: `free`,
            gap: "2rem",
          }}>
        {testimony.map((items) => {
          <SplideSlide key={items.id}>
            <Card className="border-0 carrier_in">
              <div className="center_image d-flex align-items-center justify-content-center ">
                <CircleImage img={items.img} alt={items.title} />
              </div>
              <Card.Body>
                <Card.Text style={{ color: "#787878" }}>{items.text}</Card.Text>
                <Card.Title className="">{items.title}</Card.Title>
                <Card.Text style={{ color: "#787878" }}>{items.name}</Card.Text>
              </Card.Body>
            </Card>
          </SplideSlide>;
        })}
      </Splide>
      </Row>
    </Container>
  );
}

export default Test;

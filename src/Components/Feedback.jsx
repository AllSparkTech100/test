import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card, Row, Col } from "react-bootstrap";

function Feedback() {
  const Feeds = [
    {
      name: "John David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
    },
    {
      name: "John David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
    },
    {
      name: "John David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
    },
    {
      name: "John David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
    },
  ];
  return (
    <>
      <Splide>
        <Row>
          {Feeds.map((items) => {
            return (
              <SplideSlide key={index}>
                <Col>
                  <Card>
                    <Card.Body>
                      <Card.Title>{items.name}</Card.Title>
                      <Card.Text>{items.testimony}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </SplideSlide>
            );
          })}
        </Row>
      </Splide>
    </>
  );
}

export default Feedback;

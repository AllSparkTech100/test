import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Col, Row } from "react-bootstrap";

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
  ];
  return (
    <>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          type: "fade",
          // lazyLoad: "sequential",
          gap: "10px",

          pagination: true,
          drag: `free`,
          focus: "center",
        }}
      >
        {Feeds.map((items, index) => {
          return (
            <Row key={index}>
              <Col sm={12} md={6} lg={6}>
                <SplideSlide>
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{items.name}</h5>
                      <p className="card-text">{items.testify}</p>
                    </div>
                  </div>
                </SplideSlide>
              </Col>
            </Row>
          );
        })}
      </Splide>
    </>
  );
}

export default Feedback;

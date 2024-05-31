import { Card } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import man from "../Photos/man.png";
import "./button.scss";
import CircleImage from "./CircleImage";

function Test() {
  const UserTestimony = [
    {
      id: 1,
      image: man,
      name: "Ian Boner",
      position: "Customer",
      description:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
    {
      id: 2,
      image: man,
      name: "Rose Henderson",
      position: "Customer",
      description:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
    {
      id: 3,
      image: man,
      name: "Jackson McClean",
      position: "Customer",
      description:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
    {
      id: 4,
      image: man,
      name: "Mark Stevenson",
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
    {
      id: 5,
      image: man,
      name: "Art Leonard",
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
    {
      id: 6,
      image: man,
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
    {
      id: 7,
      image: man,
      name: "Henry Ferguson",
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
    {
      id: 8,
      image: man,
      name: "Peter Rose",
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.",
    },
  ];
  return (
    <div className="testimonial">
      <Splide
        options={{
          perPage: 3,
          breakpoints: {
            640: {
              perPage: 1,
            },
            320: {
              perPage: 1,
            },
            768: {
              perPage: 2,
            },
          },
          gap: "10px",
          arrows: true,
          pagination: true,
          drag: `free`,
          focus: "center",
          type: `loop`,
        }}
      >
        {UserTestimony.map((testimony) => {
          return (
            <SplideSlide key={testimony.id}>
              <Card className="border-0 justify-content-center d-flex align-items-center  text-center">
                <CircleImage
                  className="test_img img-fluid"
                  imageUrl={testimony.image}
                />
                <div className="aps_carrier">
                  <div className="circle_inner">
                    <h3>&ldquo;</h3>
                  </div>
                </div>

                <Card.Body>
                  <Card.Text className="d-flex justify-content-center fs-6 customer_desc">
                    {testimony.description}
                  </Card.Text>
                  <Card.Title className="mb-2 text-dark fs-1">
                    <h6 className="fs-4 mt-4 fw-normal">{testimony.name}</h6>
                  </Card.Title>
                  <Card.Subtitle>
                    <p className="fs-6 mt-4">{testimony.position}</p>
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </SplideSlide>
          );
        })}
        ;
      </Splide>
    </div>
  );
}

export default Test;

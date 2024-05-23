import { Card } from "react-bootstrap";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import "./button.scss";
import CircleImage from "./CircleImage";

function Test() {
  const UserTestimony = [
    {
      id: 1,
      image:
        "https://www.pennmedicine.org/-/media/images/miscellaneous/random%20generic%20photos/smiling_man_with_beard.ashx?mw=620&mh=408",
      name: "Ian Boner",
      position: "Customer",
      description:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 2,
      image:
        "https://cdn.tatlerasia.com/tatlerasia/i/2022/04/12001134-mandarin-oriental-hong-kong-general-manager-amanda-hyndman-lr-3_cover_1500x1179.jpg",
      name: "Rose Henderson",
      position: "Customer",
      description:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKjaVWn7PSmh69vXpys6T81EjXeUn4dYH_bn1PqbWp7A&s",
      name: "Jackson McClean",
      position: "Customer",
      description:
        " A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 4,
      image:
        "https://www.lovepanky.com/wp-content/uploads/2020/11/what-makes-a-man-a-man-1.jpg",
      name: "Mark Stevenson",
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-photo/portrait-handsome-african-american-man-suit_1114948-16336.jpg",
      name: "Art Leonard",
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 6,
      image:
        "https://img.freepik.com/photos-premium/homme-affaires-senior-ia-generative_431161-15326.jpg",
      name: "Morgan Williams",
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBtYW58ZW58MHx8MHx8fDA%3D",
      name: "Henry Ferguson",
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
    {
      id: 8,
      image:
        "https://media.istockphoto.com/id/1290599844/photo/advertising-concept-confident-and-smiling-young-african-american-woman-crossed-hands-on-chest.jpg?s=612x612&w=0&k=20&c=CpVm72r8hHobjHSvkR-AE0Nws5YuQmp-jL_tgQhyTvM=",
      name: "Peter Rose",
      position: "Customer",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    },
  ];
  return (
    <div className="testimony ">
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
          },
          gap: "10px",
          arrows: false,
          drag: `free`,
          pagination: false,
          type: `loop`,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: true,
            speed: 1,
            rewind: false,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {UserTestimony.map((testimony) => {
          return (
            <SplideSlide key={testimony.id}>
              <Card className="border-0 justify-content-center d-flex align-items-center  text-center">
                <CircleImage
                  className="object-fit-cover test_img img-fluid"
                  imageUrl={testimony.image}
                />

                <div className="aps_carreir">
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

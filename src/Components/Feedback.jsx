import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./components.scss";
// import { Col, Row } from "react-bootstrap";

function Feedback() {
  const Feeds = [
    {
      name: "John David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
      img: "https://imgcdn.stablediffusionweb.com/2024/5/22/4a9f61dc-746c-4eac-902e-752704442159.jpg",
    },
    {
      name: "Sarah Jones",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
      img: "https://www.bellanaija.com/wp-content/uploads/2021/07/Miss-Imo-Chrystal-Mbazuigwe.jpg",
    },
    {
      name: "Friday David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
      img: "https://imgcdn.stablediffusionweb.com/2024/4/6/938f331c-848b-4636-b73b-57fe49cc2292.jpg",
    },
    {
      name: "John David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
      img: "https://imgcdn.stablediffusionweb.com/2024/5/22/4a9f61dc-746c-4eac-902e-752704442159.jpg",
    },
    {
      name: "Sarah Jones",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
      img: "https://www.bellanaija.com/wp-content/uploads/2021/07/Miss-Imo-Chrystal-Mbazuigwe.jpg",
    },
    {
      name: "Friday David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
      img: "https://imgcdn.stablediffusionweb.com/2024/4/6/938f331c-848b-4636-b73b-57fe49cc2292.jpg",
    },
    {
      name: "John David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
      img: "https://imgcdn.stablediffusionweb.com/2024/5/22/4a9f61dc-746c-4eac-902e-752704442159.jpg",
    },
    {
      name: "Sarah Jones",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
      img: "https://www.bellanaija.com/wp-content/uploads/2021/07/Miss-Imo-Chrystal-Mbazuigwe.jpg",
    },
    {
      name: "Friday David",
      testify:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus distinctio nostrum accusantium, ad quod similique ipsa vitae commodi minima dolorum! Ex amet voluptatem sit in cumque esse laborum ea atque?F",
      img: "https://imgcdn.stablediffusionweb.com/2024/4/6/938f331c-848b-4636-b73b-57fe49cc2292.jpg",
    },
  ];
  return (
    <>
      <Splide
        options={{
          perPage: 3,
          arrows: true,
          type: "loop",
          gap: "10px",
          rewind: true,
          pagination: false,
          lazyLoading: "sequential",
        }}
      >
        {Feeds.map((items, index) => {
          return (
            <SplideSlide key={index}>
              <div className="feed-carrier">
                <div className="card  p-4 border-2 rounded-3 text-center justify-content-center align-items-center">
                  <div className="user-image">
                    <img src={items.img} alt={items.name} loading="lazy" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{items.name}</h5>
                    <p className="card-text">{items.testify}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
}

export default Feedback;

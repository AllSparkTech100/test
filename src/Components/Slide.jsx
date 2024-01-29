import { Carousel } from "react-bootstrap";
import "./button.scss";

function Slide() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <img
            src={
              "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1704240000&semt=ais"
            }
            alt={""}
          />
          <Carousel.Caption>
            <h3>Feliciano</h3>
            <p>BEST RESTAURANT.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src={
              "https://img.freepik.com/premium-photo/background-cooking-set-spices-fresh-vegetables-top-view-free-space-your-text-black-stone-background_187166-56648.jpg"
            }
            alt={""}
          />
          <Carousel.Caption>
            <h3>Feliciano</h3>
            <p>NUTIRITOUS AND TASTY</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={
              "https://img.freepik.com/premium-photo/background-cooking-set-spices-fresh-vegetables-top-view-free-space-your-text-black-stone-background_187166-56648.jpg"
            }
            alt={""}
          />
          <Carousel.Caption>
            <h3>Feliciano</h3>
            <p>DELICIOUS SPECIALTIES</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Gradient /> */}
      </Carousel>
    </div>
  );
}

export default Slide;

import { Carousel } from "react-bootstrap";
import "./button.scss";

function Slide() {
  return (
    <div>
      <Carousel className="carousel-fade" indicators={false}>
        <Carousel.Item interval={500}>
          <img
            className="w-100"
            src={
              "https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.1.1788614524.1704240000&semt=ais"
            }
            alt={""}
          />
          <Carousel.Caption className="captions">
            <h3>Feliciano</h3>
            <div className="trust">
              <p>BEST RESTAURANT.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="w-100"
            src={
              "https://img.freepik.com/premium-photo/background-cooking-set-spices-fresh-vegetables-top-view-free-space-your-text-black-stone-background_187166-56648.jpg"
            }
            alt={""}
          />
          <Carousel.Caption className="captions">
            <h3>Feliciano</h3>
            <div className="trust">
              <p>NUTIRITOUS AND TASTY</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src={
              "https://img.freepik.com/premium-photo/background-cooking-set-spices-fresh-vegetables-top-view-free-space-your-text-black-stone-background_187166-56648.jpg"
            }
            alt={""}
          />
          <Carousel.Caption className="captions">
            <h3>Feliciano</h3>
            <div className="trust">
              <p>DELICIOUS SPECIALTIES</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;

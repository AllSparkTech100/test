import { Carousel } from "react-bootstrap";
import "./button.scss";

function Slide() {
  return (
    <div className="carousel slide-carry">
      <div className="slide-images">
        {" "}
        <Carousel className="carousel-fade " indicators={false}>
          <Carousel.Item interval={500}>
            <img
              className="w-100"
              src={
                "https://techcrunch.com/wp-content/uploads/2015/08/shutterstock_237882754.jpg"
              }
              alt={""}
            />
            <Carousel.Caption className="back-drop">
              <div className="captions">
                <h3>Feliciano</h3>
                <div className="trust">
                  <p>BEST RESTAURANT</p>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="w-100"
              src={
                "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/45/34/3a/wide-range-of-international.jpg?w=600&h=-1&s=1"
              }
              alt={""}
            />
            <div className="back-drop">
              <Carousel.Caption className="captions">
                <h3>Feliciano</h3>
                <div className="trust">
                  <p>NUTIRITOUS AND TASTY</p>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-100"
              src={
                "https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg"
              }
              alt={""}
            />
            <div className="back-drop">
              <Carousel.Caption className="captions">
                <h3>Feliciano</h3>
                <div className="trust">
                  <p>DELICIOUS SPECIALTIES</p>
                </div>
              </Carousel.Caption>
            </div>
          </Carousel.Item>{" "}
        </Carousel>
      </div>
    </div>
  );
}

export default Slide;

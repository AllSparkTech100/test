import "./pages.scss";
import ImgCard from "../Components/ImgCard";
// import Badge from './bootstrap'
import Slide from "../Components/Slide";
import CircleImage from "../Components/CircleImage";
import CardComp from "../Components/Card";
import FormComp from "../Components/Form";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import { FaBirthdayCake, FaBusinessTime } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import barr from "../Photos/chef-2.jpg";
import bar2 from "../Photos/bar-2.jpg";
import bar1 from "../Photos/wineee.jpg";
import wine from "../Photos/wines.jpg";
// import foods from '../Photos/food-1.jpg'
// import food from '../Photos/food-2.jpeg'
import chef from "../Photos/chef-1.jpg";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css";

function Home() {
  return (
    <>
      <Slide />

      <main className="my-5">
        {/* First Line */}
        <Container fluid>
          <Row className="m-md-0 m-2">
            <Col sm={3} md={3} className="good">
              <CircleImage
                imageUrl={
                  "https://www.eatingwell.com/thmb/ngkEIo8XHdZxLcmY-Se-yk3uGjc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(959x678:961x680)/is-grilled-meat-bad-for-you-ba946756dae3432592d0b463941b1917.jpg"
                }
              />
              <div className="under-text">
                <h5 className="fw-semibold mt-2">Grilled Meat With Tomatoes</h5>
                <p className="fw-medium mt-2">Meat, Potatoes, Rice, Tomato</p>
              </div>
            </Col>
            <Col sm={3} md={3} className="good">
              <CircleImage
                imageUrl={
                  "https://hips.hearstapps.com/hmg-prod/images/delish-grilled-potatoes-jpg-1526061594.jpg?crop=1xw:0.9968354430379747xh;center,top"
                }
              />
              <div className="under-text">
                <h5 className="fw-semibold mt-2">
                  Grilled Potatoes With Tomatoes
                </h5>
                <p className="fw-medium mt-2">Meat, Potatoes, Rice, Tomato</p>
              </div>
            </Col>
            <Col sm={3} md={3} className="good">
              <CircleImage
                imageUrl={
                  "https://img.taste.com.au/pQppG_f4/taste/2016/11/barbecued-japanese-rice-cakes-onigiri-110057-1.jpeg"
                }
              />
              <div className="under-text">
                <h5 className="fw-semibold mt-2">Grilled Rice With Tomatoes</h5>
                <p className="fw-medium mt-2">Meat, Potatoes, Rice, Tomato</p>
              </div>
            </Col>
            <Col sm={3} md={3} className="good">
              <CircleImage
                imageUrl={
                  "https://www.feastingathome.com/wp-content/uploads/2023/06/Grilled-Tomatoes-12.jpg"
                }
              />
              <div className="under-text">
                <h5 className="fw-semibold mt-2">
                  Grilled Tomato With Tomatoes
                </h5>
                <p className="fw-medium mt-2">Meat, Potatoes, Rice, Tomato</p>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Info Sect */}
        <Container fluid className="mt-5 h-100">
          {/* About */}
          <Row className="rest_info m-1">
            <Col sm={6} md={7} xl={6} className="two_img mt-2">
              <Image
                src={barr}
                alt=""
                className="h-100 w-100 object-fit-cover"
                rounded
              />
            </Col>
            <Col sm={6} md={5} xl={6} className="tp">
              <h6 className="fw-normal position-relative text-capitalize ">
                about
              </h6>
              <h3 className="fw-medium">Feliciano Restaurant</h3>
              <p className="fw-normal mt-3 fs-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <p className="fw-normal fs-4 mt-4">
                Mon -Fri &nbsp; <span className="fw-bold">8AM - 11PM</span>
              </p>
              <h4 className="fw-bold fs-1">+234-9027-91057</h4>
            </Col>
          </Row>

          {/* Personnel Count */}
          <Row className="stat p-md-3 text-md-start text-center">
            <Col md={2} sm={12} className="mb-4">
              <h3 className="fw-semibold">18</h3>
              <h6>YEARS OF EXPERIENCE</h6>
            </Col>
            <Col md={2} sm={12} className="mb-4">
              <h3 className="fw-semibold">100</h3>
              <h6>MENUS / DISHES</h6>
            </Col>
            <Col md={2} sm={12} className="mb-4">
              <h3 className="fw-semibold">50</h3>
              <h6>STAFFS</h6>
            </Col>
            <Col md={2} sm={12} className="mb-4">
              <h3 className="fw-semibold">15,000</h3>
              <h6>HAPPY CUSTOMERS</h6>
            </Col>
            <Col md={4} sm={12} className="mb-4">
              <p className="fs-5 text-center text-md-start ">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </Col>
          </Row>
          {/* Services */}
          <section id="services">
            <Col sm={12} md={12} className="text-center head">
              <h4>Services</h4>
              <h2 className="fw-bolder">Catering Services</h2>
            </Col>
            <Row>
              <Col md={4} sm={12} className="mt-4">
                <CardComp
                  icon={<FaBirthdayCake />}
                  subtitle="Birthday Party"
                  text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                />
              </Col>
              <Col md={4} sm={12} className="mt-4">
                <CardComp
                  icon={<FaBusinessTime />}
                  subtitle="Business Meeting"
                  text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                />
              </Col>
              <Col md={4} sm={12} className="mt-4">
                <CardComp
                  icon={<BiDish />}
                  subtitle="Wedding Party"
                  text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                />
              </Col>
            </Row>
          </section>

          {/* Special Menu */}

          <section id="menu">
            <Col sm={12} md={12} className="text-center head">
              <h4>Specialties</h4>
              <h2 className="fw-bold">Our Menu</h2>
            </Col>
          </section>
        </Container>

        {/* Chefs */}
        <Container fluid>
          <Container>
            <section className="chef">
              <Col sm={12} md={12} className="text-center head">
                <h4>Chef</h4>
                <h2 className="fw-bold">Our Master Chef</h2>
              </Col>
              <Row id="imges">
                <Col md={3} sm={12}>
                  <ImgCard
                    imgUrl={chef}
                    name={"John Smooth"}
                    text={"Restaurant Owner"}
                  />
                </Col>
                <Col md={3} sm={12}>
                  <ImgCard
                    imgUrl={
                      "https://www.shutterstock.com/image-photo/cooking-culinary-people-concept-happy-600nw-2136448507.jpg"
                    }
                    name={"Rebecca Welson"}
                    text={"Head Chef"}
                  />
                </Col>
                <Col md={3} sm={12}>
                  <ImgCard
                    imgUrl={
                      "https://dg1xqmhtoint1.cloudfront.net/img/ihm/blog/ihm-12.webp?mtime=20220519155503&focal=none"
                    }
                    name={"Kharl Bryant"}
                    text={"Chef"}
                  />
                </Col>
                <Col md={3} sm={12}>
                  <ImgCard
                    imgUrl={
                      "https://www.ecpi.edu/sites/default/files/Aug%2022%20CIV.png"
                    }
                    name={"Luke Simon"}
                    text={"Chef"}
                  />
                </Col>
              </Row>
            </section>
          </Container>
        </Container>
        <Container fluid className="bg-image form_bg p-5">
          <div>
            <FormComp />
          </div>
        </Container>

        {/* Testimony */}
        {/* <Container className="testimony">
          <Col sm={12} md={12} className="text-center info">
            <h4>Testimony</h4>
            <div className="info_inner">
              <h2 className="fw-bold">Happy Customers</h2>
            </div>
          </Col>
          <Splide
            options={{
              perPage: 4,
              arrows: false,
              pagination: false,
              drag: `free`,
              gap: "2rem",
            }}
          >
            <SplideSlide></SplideSlide>
          </Splide>
        </Container> */}

        {/* Blog */}
        <Container fluid>
          <div className="blog">
            <Col sm={12} md={12} className="text-center info">
              <h4>Blog</h4>
              <div className="info_inner">
                <h2 className="fw-bold">Recent Post</h2>
              </div>
            </Col>
            <Container>
              <Row>
                <Col md={4} sm={12} className="mt-5">
                  <Card className="shadow-none border-0">
                    <Card.Img
                      variant="top"
                      className="img fluid h-50"
                      src={wine}
                    />
                    <Card.Body>
                      <Card.Text style={{ color: "#787878" }}>
                        Sept. 06 2019 Admin
                      </Card.Text>
                      <Card.Title>Taste the Delicious foods in Asia</Card.Title>
                    </Card.Body>
                    <Card.Footer className="border-0">
                      <small className="text-muted">Read More</small>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col md={4} sm={12} className="mt-5">
                  <Card className="shadow-none border-0">
                    <Card.Img
                      variant="top"
                      className="h-auto img-fluid"
                      src={bar2}
                    />
                    <Card.Body>
                      <Card.Text style={{ color: "#787878" }}>
                        Sept. 06 2019 Admin
                      </Card.Text>
                      <Card.Title>Taste the Delicious foods in Asia</Card.Title>
                    </Card.Body>
                    <Card.Footer className="border-0">
                      <small className="text-muted">Read More</small>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col md={4} sm={12} className="mt-5">
                  <Card className="shadow-none border-0 h-100">
                    <Card.Img
                      variant="top"
                      className="h-75 img fluid"
                      src={bar1}
                    />
                    <Card.Body>
                      <Card.Text style={{ color: "#787878" }}>
                        Sept. 06 2019 Admin
                      </Card.Text>
                      <Card.Title>Taste the Delicious foods in Asia</Card.Title>
                    </Card.Body>
                    <Card.Footer className="border-0">
                      <small className="text-muted">Read More</small>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </main>
    </>
  );
}

export default Home;

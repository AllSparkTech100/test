import "./pages.scss";
import ImgCard from "../Components/ImgCard";
import CardComp from "../Components/Card";
import FormComp from "../Components/Form";
import { Container, Row, Col, Image} from "react-bootstrap";
import { FaBirthdayCake, FaBusinessTime } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import barr from "../Photos/chef-2.jpg";
import chef from "../Photos/chef-1.jpg";

function About() {
  return (
    <>
      <main className="">
        <div className="bg-image about_intro">
          <div className="about_text">
            <h3 className="text-white text-center">About</h3>
            <p className="text-center">
              <a href="/" className="text-white fw-normal">
                Home &gt;
              </a>
            </p>
          </div>
        </div>
        {/* Info Sect */}
        <Container fluid className="rest_carrier h-100">
          {/* About */}
          <Row className="rest_info m-1">
            <Col sm={12} md={12} lg={6} className="two_img mt-2">
              <Image
                src={barr}
                alt=""
                className="h-100 w-100 object-fit-cover"
                rounded
              />
            </Col>
            <Col sm={12} md={12} lg={6} className="tp">
              <h6 className="fw-normal position-relative text-capitalize ">
                about
              </h6>
              <h3 className="fw-medium fel">Feliciano Restaurant</h3>
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
          <Row className="stat p-md-5 text-md-start text-center">
            <Col md={4} lg={2} sm={12} className="mb-4">
              <h3 className="fw-semibold">18</h3>
              <h6>YEARS OF EXPERIENCE</h6>
            </Col>
            <Col md={4} lg={2} sm={12} className="mb-4">
              <h3 className="fw-semibold">100</h3>
              <h6>MENUS / DISHES</h6>
            </Col>
            <Col md={4} lg={2} sm={12} className="mb-4">
              <h3 className="fw-semibold">50</h3>
              <h6>STAFFS</h6>
            </Col>
            <Col md={4} lg={2} sm={12} className="mb-4">
              <h3 className="fw-semibold">15,000</h3>
              <h6>HAPPY CUSTOMERS</h6>
            </Col>
            <Col md={8} lg={4} sm={12} className="mb-4">
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
              <Col md={12} lg={4} sm={12} className="mt-4">
                <CardComp
                  icon={<FaBirthdayCake />}
                  subtitle="Birthday Party"
                  text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                />
              </Col>
              <Col md={12} lg={4} sm={12} className="mt-4">
                <CardComp
                  icon={<FaBusinessTime />}
                  subtitle="Business Meeting"
                  text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                />
              </Col>
              <Col md={12} lg={4} sm={12} className="mt-4">
                <CardComp
                  icon={<BiDish />}
                  subtitle="Wedding Party"
                  text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                />
              </Col>
            </Row>
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
                <Col md={6} lg={3} sm={12}>
                  <ImgCard
                    imgUrl={chef}
                    name={"John Smooth"}
                    text={"Restaurant Owner"}
                  />
                </Col>
                <Col md={6} lg={3} sm={12}>
                  <ImgCard
                    imgUrl={
                      "https://www.shutterstock.com/image-photo/cooking-culinary-people-concept-happy-600nw-2136448507.jpg"
                    }
                    name={"Rebecca Welson"}
                    text={"Head Chef"}
                  />
                </Col>
                <Col md={6} lg={3} sm={12}>
                  <ImgCard
                    imgUrl={
                      "https://dg1xqmhtoint1.cloudfront.net/img/ihm/blog/ihm-12.webp?mtime=20220519155503&focal=none"
                    }
                    name={"Kharl Bryant"}
                    text={"Chef"}
                  />
                </Col>
                <Col md={6} lg={3} sm={12}>
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
        <Container fluid className="bg-image form_bg p-md-5">
          <div>
            <FormComp />
          </div>
        </Container>
      </main>
    </>
  );
}
export default About;
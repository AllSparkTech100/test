import "./pages.scss";
import ImgCard from "../Components/ImgCard";
import CardComp from "../Components/Card";
import FormComp from "../Components/Form";
import Test from "../Components/Test";
import Counterr from "../Components/Counter"
import { Container, Row, Col, Image } from "react-bootstrap";
import { FaBirthdayCake, FaBusinessTime } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import barr from "../Photos/chef-2.jpg";
import chef from "../Photos/chef-1.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
      once: false,
      startEvent: "DOMContentLoaded",
    });
  });
  return (
    <>
      <main className="">
        <div className="bg-image about_intro">
          <div className="about_text">
            <h3
              className="text-white text-center"
              data-aos="fade-up"
              data-aos-offset="0"
            >
              About
            </h3>
            <p className="text-center" data-aos="fade-up" data-aos-offset="0">
              <a href="/" className="text-white fw-normal">
                Home &gt;
              </a>
            </p>
          </div>
        </div>
        {/* Info Sect */}
        <Container fluid className="rest_carrier p-md-5  h-100">
          {/* About */}
          <div className="container-fluid mt-5">
            <div className="container-sm-fluid">
              <Row className=" show_case">
                <Col>
                  <div className="double_images">
                    <div className="item_1">
                      <Image src={chef} alt="" />
                    </div>
                    <div className="item_2">
                      <Image src={barr} alt="" />
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="shop_time" data-aos="fade-up">
                    <h6 className="fw-normal brand_header">about</h6>
                    <h3 className="fw-medium brand_name ">
                      Feliciano Restaurant
                    </h3>
                    <p className="fw-normal fs-4 ">
                      A small river named Duden flows by their place and
                      supplies it with the necessary regelialia. It is a
                      paradisematic country, in which roasted parts of sentences
                      fly into your mouth.
                    </p>
                    <p className="fw-normal fs-4 mt-4">
                      Mon -Fri &nbsp;{" "}
                      <span className="fw-bold">8AM - 11PM</span>
                    </p>
                    <h4 className="fw-bold thime fs-1">+234-9027-91057</h4>
                  </div>
                </Col>
              </Row>
            </div>
          </div>

          {/* Personnel Count */}
         <Counterr/>

         
          {/* Services */}
          <section id="services">
            <Col
              sm={12}
              md={12}
              data-aos="fade-up"
              className="text-center head"
            >
              <h4>Services</h4>
              <h2 className="fw-bolder">Catering Services</h2>
            </Col>
            <Row>
              <Col data-aos="fade-up" md={4} sm={12} className="mt-4">
                <CardComp
                  icon={<FaBirthdayCake />}
                  subtitle="Birthday Party"
                  text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                />
              </Col>
              <Col data-aos="fade-up" md={4} sm={12} className="mt-4">
                <CardComp
                  icon={<FaBusinessTime />}
                  subtitle="Business Meeting"
                  text="Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic."
                />
              </Col>
              <Col data-aos="fade-up" md={4} sm={12} className="mt-4">
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
          <Container fluid="md">
            <section className="chef">
              <Col
                data-aos="fade-up"
                sm={12}
                md={12}
                className="text-center chef_head"
              >
                <h4>Chef</h4>
                <h2 className="fw-bold">Our Master Chef</h2>
              </Col>
              <Row id="imges">
                <Col data-aos="fade-up"  md={6}
                lg={3}
                sm={12} className="mt-sm-5">
                  <ImgCard
                    imgUrl={chef}
                    name={"John Smooth"}
                    text={"Restaurant Owner"}
                  />
                </Col>
                <Col data-aos="fade-up"  md={6}
                lg={3}
                sm={12} className="mt-sm-5">
                  <ImgCard
                    imgUrl={
                      "https://www.shutterstock.com/image-photo/cooking-culinary-people-concept-happy-600nw-2136448507.jpg"
                    }
                    name={"Rebecca Welson"}
                    text={"Head Chef"}
                  />
                </Col>
                <Col data-aos="fade-up"  md={6}
                lg={3}
                sm={12} className="mt-sm-5">
                  <ImgCard
                    imgUrl={
                      "https://dg1xqmhtoint1.cloudfront.net/img/ihm/blog/ihm-12.webp?mtime=20220519155503&focal=none"
                    }
                    name={"Kharl Bryant"}
                    text={"Chef"}
                  />
                </Col>
                <Col data-aos="fade-up" md={6}
                lg={3}
                sm={12} className="mt-sm-5">
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

        {/* Form */}
        <Container fluid className="bg-image form_bg p-md-5">
          <div>
            <FormComp />
          </div>
        </Container>

        {/* Testimony */}
        <Container fluid className="testimony">
          <Col data-aos="fade-up" sm={12} md={12} className="text-center infoo">
            <h4>Testimony</h4>
            <div className="infoo_inner text-center">
              <h2 className="fw-bold text-center">Happy Customers</h2>
            </div>
          </Col>
          <Container fluid>
            <Test />
          </Container>
        </Container>
      </main>
    </>
  );
}
export default About;

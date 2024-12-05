import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../Components/ServiceCard";
import therapist from "../Images/therapist.jpeg";
import therapy from "../Images/therap2.jpeg";
import Feedback from "../Components/Feedback";
import { useEffect } from "react";
import "./pages.scss";
import AOS from "aos";

function Service() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      delay: 50,
      offset: 200,
      startEvent: "DOMContentLoaded",
    });
  });
  AOS.refresh();
  return (
    <>
      <Container fluid className="about-section-hero bg-image">
        <div className="contact-hero-inner">
          <h4 className="text-white">Our Services</h4>
          <div className="mt-4">
            {" "}
            <p className="text-white">A healthier Choice for a heathier you!</p>
          </div>
        </div>
      </Container>
      <section className="service-container container-fluid">
        <Container className="mt-5 p-md-5 p-lg-5 py-3" fluid>
          <ServiceCard />
        </Container>
      </section>
      {/* Image with Circle */}
      <section className="better bg-image">
        <div className="circle p-5 text-center" data-aos="zoom-in">
          <h2 className="text-warning text-uppercase mb-md-3 mb-1">
            Our Value
          </h2>
          <h4 className="text-capitalize mb-md-3 mb-1 mt-md-3 mt-1">
            Bringing Therapy to <br /> the Common Man
          </h4>
          <p className="my-md-3 my-2">
            Aims to help individuals explore career options, set professional
            goals, and overcome workplace challenges, fostering personal growth
            and fulfillment.
          </p>
          <button className="bg-dark btn rounded-5 my-3 py-md-4 px-md-5">
            <a
              href="https://linktr.ee/alexandercomfort?fbclid=IwY2xjawGXHzRleHRuA2FlbQIxMAABHXZcpw-IWCNMDL5ZHdvdoEhPvKHae8LuTVyvOJItmXfR7RKVt7CinYZwkQ_aem_rxzbBEAA7gl_r03ZfQvW9g"
              target="_blank"
              className="text-white"
            >
              Discover More
            </a>
          </button>
        </div>
      </section>
      {/* What you get */}
      <Container className="offer-carrier" fluid>
        <section className="bg-white offers mx-md-5 mx-lg-5">
          <Row>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="left-prof"
              data-aos="fade-up"
            >
              <h3 className="prof-serv-head">Professional Services</h3>
              <h5 className="" data-aos="fade-left">
                We want you to get the care you deserve !!!
              </h5>
              <p className="my-3" data-aos="fade-up">
                Focusing on helping individuals address specific challenges,
                such as stress, anxiety, or relationship issues, by providing a
                safe space for open communication and guidance.
              </p>
              <ul>
                <li data-aos="fade-left">Individuals with high stress</li>
                <li data-aos="fade-right">People with Anxiety or Depression</li>
                <li data-aos="fade-left">Busy Professionals</li>
                <li data-aos="fade-right">
                  Communities in need of Emotional Support
                </li>
                <li data-aos="fade-left">
                  Individuals Seeking Personal Growth
                </li>
              </ul>
            </Col>

            <Col sm={12} md={12} lg={6}>
              <div className="grid-container mt-md-5">
                <div
                  className="grid-item image-item image-item-1"
                  data-aos="flip-up"
                >
                  <img src={therapy} loading="lazy" alt="Therapy Session" />
                </div>
                <div className="grid-item image-item" data-aos="flip-down">
                  <img src={therapist} loading="lazy" alt="Therapy Session " />
                </div>
                <div className="grid-item text-item" data-aos="flip-left">
                  <div className="experience-text">
                    <span className="text-warning years">25+</span>
                    <div className="description">Years of Experience</div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </section>
      </Container>

      <Container className="feedback-scroll ">
        <h2 className="mt-5 mb-5 text-uppercase fw-semibold text-decoration-underline text-center">
          testimonies
        </h2>
        <Feedback />
      </Container>
    </>
  );
}

export default Service;

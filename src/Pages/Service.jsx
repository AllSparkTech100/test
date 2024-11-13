import { Container, Row, Col } from "react-bootstrap";
import ServiceCard from "../Components/ServiceCard";
import therapist from "../Images/therapist.jpeg";
import therapy from "../Images/therap2.jpeg";
import Feedback from "../Components/Feedback";
import "./pages.scss";

function Service() {
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
      <Container className="mt-5 p-md-5 p-lg-5 py-3" fluid>
        <ServiceCard />
      </Container>
      <section className="better bg-image">
        <div className="circle p-5 text-center">
          <h2 className="text-warning text-uppercase mb-3 fs-5">Our Value</h2>
          <h4 className="text-capitalize fs-2 mb-3 mt-3">
            Bringing Therapy to <br /> the Common Man
          </h4>
          <p className="my-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
            laboriosam. Itaque, officia. Incidunt esse aut officiis odit qui!
            Illum facere repellendus porro tempora velit vero?
          </p>
          <button className="bg-dark btn rounded-5 my-3">
            <a href="#" className="text-white">
              Discover More
            </a>
          </button>
        </div>
      </section>

      <Container className="offer-carrier" fluid>
        <section className="bg-white offers mx-md-5 mx-lg-5">
          <Row>
            <Col sm={12} md={6} lg={6} className="left-prof">
              <h3 className="prof-serv-head">Professional Services</h3>
              <h5 className="">We want you to get the care you deserve</h5>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremnam repudiandae molestiae, similique totam ad?nam
                repudiandae molestiae, similique totam ad?nam repudiandae
                molestiae, similique totam ad? nam repudiandae molestiae,
                similique totam ad?
              </p>
              <ul>
                <li>Individuals with high stress</li>
                <li>People with Anxiety or Depression</li>
                <li>Busy Professionals</li>
                <li>Communities in need of Emotional Support</li>
                <li>Individuals Seeking Personal Growth</li>
              </ul>
            </Col>

            <Col sm={12} md={6} lg={6}>
              <div className="grid-container">
                <div className="grid-item image-item image-item-1">
                  <img src={therapy} loading="lazy" alt="Therapy Session" />
                </div>
                <div className="grid-item image-item">
                  <img src={therapist} loading="lazy" alt="Therapy Session " />
                </div>
                <div className="grid-item text-item">
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
        <h2 className="mt-5 mb-5 text-uppercase fw-semibold text-decoration-underline text-center">testimonies</h2>
        <Feedback />
      </Container>
    </>
  );
}

export default Service;

import { Container, Row, Col } from "react-bootstrap";
import "./pages.scss";
import graduate from "/images/high.jpg";
import student from "/images/study.jpg";
import autumn from "/images/autumn.webp";
import airport from "/images/airport.jpg";
import Counterr from "../Components/Counter";
import Courses from "../Components/Courses";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { GrCertificate } from "react-icons/gr";
import { FaChild } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { useEffect } from "react";
import SchoolEvent from "../Components/Card";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
      once: false,
    });
  });
  return (
    <>
      <main>
        {/* Hero_intro */}
        <Container className="hero bg-image" fluid>
          <Row data-aos-startEvent="DOMContentLoad" className="hero_inner">
            <Col lg={8} sm={12} md={6}>
              <p
                className="text-white-50"
                data-aos="fade-up"
                data-aos-duration="500"
              >
                Welcome to
              </p>
              <h2
                className="text-uppercase text-white"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                nerissa academy
              </h2>
              <p
                className="text-white-50"
                data-aos="fade-left"
                data-aos-duration="500"
              >
                Making an Impact in the{" "}
                <span className="fw-bold text-white">Education Sector</span>
              </p>
            </Col>
          </Row>
        </Container>
        {/* Application Procedures */}
        <Container className="applications">
          <Row className="gx-5">
            <Col
              sm={12}
              md={6}
              lg={6}
              data-aos="fade-right"
              data-aos-duration="500"
              className="mt-5"
            >
              <h4 className="mb-3 text-left">Application Processes</h4>
              <h5 className="fw-bold text-primary">
                Applications are open for all classes
              </h5>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                quo natus quae distinctio dolorum, explicabo ipsum obcaecati
                porro sunt, officiis eveniet facilis laboriosam odit earum in
                amet itaque? Eius aliquam quae, necessitatibus fugit iure veniam
                quod rerum natus. Error, nulla. Provident incidunt veniam et
                corrupti qui accusamus numquam, quod similique.
              </p>
              <p className="my-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                architecto ullam, laudantium impedit inventore tempora corporis
                facere natus deleniti quisquam, facilis fugiat quae culpa
                asperiores.
              </p>
              <button
                data-aos="fade-right"
                data-aos-duration="500"
                className="btn_primary buttons my-3"
              >
                <a href="" className="text-decoration-none text-white">
                  Register Here
                </a>
              </button>
            </Col>
            <Col className="d-none d-md-block d-lg-block" md={6} lg={6}>
              <img
                data-aos="fade-left"
                data-aos-duration="500"
                src={graduate}
                alt=""
                className="img-fluid h-100 rounded-5"
              />
            </Col>
          </Row>
        </Container>
        {/* Scroll Counter */}
        <Counterr />

        {/* Services */}
        <Container fluid>
          <section className="service">
            <Col>
              <h5
                data-aos="fade-down"
                data-aos-duration="500"
                className="text-uppercase fw-bold text-primary serve_title"
              >
                What we offer
              </h5>
            </Col>
            <Row className="mt-3 p-lg-2 p-md-2 p-0">
              <Col
                data-aos="fade-down"
                data-aos-duration="500"
                sm={12}
                md={6}
                lg={6}
                className="mb-3"
              >
                <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-contents-between">
                  <div>
                    <IoShieldCheckmarkOutline size={90} />
                  </div>
                  <p className="fw-normal ms-lg-5 ms-md-2">
                    <h4 className="fw-semibold text-uppercase mt-4 mb-3">
                      safety first
                    </h4>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veniam officia, ipsam quasi enim libero obcaecati
                    repellendus inventore molestiae et perspiciatis dolor,
                    adipisci laudantium facilis at fugiat iure nulla commodi sed
                    numquam, eveniet dolorem consequuntur exercitationem eos
                    velit? Nemo, quia! Corporis.
                  </p>
                </div>
              </Col>
              <Col
                data-aos="fade-up"
                data-aos-duration="500"
                sm={12}
                md={6}
                lg={6}
                className="mb-3"
              >
                <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-contents-between">
                  <div>
                    <FaChild size={90} />
                  </div>
                  <p className="fw-normal ms-lg-5 ms-md-2">
                    <h4 className="fw-semibold text-uppercase mt-4 mb-3">
                      infant care
                    </h4>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veniam officia, ipsam quasi enim libero obcaecati
                    repellendus inventore molestiae et perspiciatis dolor,
                    adipisci laudantium facilis at fugiat iure nulla commodi sed
                    numquam, eveniet dolorem consequuntur exercitationem eos
                    velit? Nemo, quia! Corporis.
                  </p>
                </div>
              </Col>
              <Col
                data-aos="fade-down"
                data-aos-duration="500"
                sm={12}
                md={6}
                lg={6}
                className="mb-3"
              >
                <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-contents-between">
                  <div>
                    <GiWorld size={90} />
                  </div>
                  <p className="fw-normal ms-lg-5 ms-md-2">
                    <h4 className="fw-semibold text-uppercase mt-4 mb-3">
                      happy environment
                    </h4>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veniam officia, ipsam quasi enim libero obcaecati
                    repellendus inventore molestiae et perspiciatis dolor,
                    adipisci laudantium facilis at fugiat iure nulla commodi sed
                    numquam, eveniet dolorem consequuntur exercitationem eos
                    velit? Nemo, quia! Corporis.
                  </p>
                </div>
              </Col>
              <Col
                data-aos="fade-up"
                data-aos-duration="500"
                sm={12}
                md={6}
                lg={6}
                className="mb-3"
              >
                <div className="d-flex flex-column flex-lg-row flex-md-row align-items-center justify-contents-between">
                  <div>
                    <GrCertificate size={90} />
                  </div>
                  <p className="fw-normal ms-lg-5 ms-md-2">
                    <h4 className="fw-semibold text-uppercase mt-4 mb-3">
                      certified teachers
                    </h4>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Veniam officia, ipsam quasi enim libero obcaecati
                    repellendus inventore molestiae et perspiciatis dolor,
                    adipisci laudantium facilis at fugiat iure nulla commodi sed
                    numquam, eveniet dolorem consequuntur exercitationem eos
                    velit? Nemo, quia! Corporis.
                  </p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>

        {/* Events */}
        <Container fluid className="event-up bg-image">
          <Col>
            <h3 className="text-center fw-bold fs-2 text-primary">
              Educational Events
            </h3>
          </Col>
          <Row className="mt-5">
            <SchoolEvent
              img={autumn}
              title="Eduma Autumn 2024"
              date="29th May, 2024"
              time="08:00 - 14:00"
              venue="Mainland Street NG, Rivers State"
              text="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam."
            />
            <SchoolEvent
              img={student}
              title="Spelling Bee Competition"
              date="29th July, 2024"
              time="10:00 - 16:00"
              venue="12 Ajeokuta Street NG, Ondo State"
              text="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam."
            />
            <SchoolEvent
              img={airport}
              title="Excursion to the PortHarcourt International Airport"
              date="29th June, 2024"
              time="10:00 - 16:00"
              venue="POrtHarcourt Airport, Rivers State"
              text="  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam."
            />
          </Row>
          <div className="mt-5 mb-5 d-flex align-items-center justify-content-center">
            <button className=" fw-medium buttons btn_secondary">
              <a href="/">View More</a>
            </button>
          </div>
        </Container>

        {/* School Courses */}
        <Container fluid="sm" className="courses">
          <h2 className="text-center fw-bold">Our Curriculums</h2>
          <p className="text-center fs-4">
            We Offer all British and European Standard Courses{" "}
          </p>
          <div>
            <Courses />
          </div>
          {/* this button takes you to the course page */}
          <div className="mt-5 d-flex justify-content-center">
            <button className="buttons btn_primary">
              <a href="" className="text-white">
                View All Courses
              </a>
            </button>
          </div>
        </Container>

        {/* Customer Support */}
        <Container className="support">
          <h3 className="text-center fw-bold fs-2 text-primary text-uppercase">
            Student Support Center
          </h3>
          <Row className="mt-5">
            <Col
              md={6}
              lg={6}
              sm={12}
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h2 className="my-4 fw-normal">
                Provide Excellent{" "}
                <span className="fw-bold fs-1">
                  Customer Service & Implement
                </span>
              </h2>

              <p className="mt-5 mb-5 text-justify">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Laborum ratione repellat quia laboriosam fuga aspernatur saepe
                maxime, magnam ipsa, culpa, est id labore Debitis, tempora.
                Sapiente, enim pariatur.
              </p>

              <div className=" d-flex align-items-center gap-3">
                <FaHeadphonesAlt size={50} className="text-primary" />
                <div className="my-5">
                  <h4 className="fw-medium fs-5">HELPLINE:</h4>
                  <p className="fs-3 fw-medium text-primary">(234)90389289</p>
                </div>
              </div>
            </Col>
            <Col data-aos="fade-left" data-aos-duration="500">
              <div className="message d-md-block d-lg-flex d-none">
                <FaMessage size={150} className="text-white" />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Home;

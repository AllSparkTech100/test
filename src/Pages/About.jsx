import "./pages.scss";
import { Container, Col, Row } from "react-bootstrap";
import { RiSchoolLine } from "react-icons/ri";
import { ImBooks } from "react-icons/im";
import { PiStudentLight } from "react-icons/pi";
import { GrCertificate } from "react-icons/gr";
import { FaGlobe } from "react-icons/fa6";
import { GoTriangleRight } from "react-icons/go";
import { GiWorld } from "react-icons/gi";
import TeachersCard from "../Components/TeachersCard";
import meet from "/public/images/meet.svg";
import Parents from "../Components/Parents";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
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
        {/* Intro */}
        <Container fluid className="bg-image about_intro">
          <h2 className="fw-bold text-center">About Us</h2>
        </Container>

        {/* ICons */}
        <Container className="duties">
          <Row>
            <Col md={4} lg={4} sm={6}>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="d-flex flex-column my-4 mx-4  align-items-center justify-content-center"
              >
                <FaGlobe className="text-primary" size={90} />
                <h4 className="mt-3">Our Programs</h4>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="d-flex flex-column  my-4 mx-4 align-items-center justify-content-center"
              >
                <RiSchoolLine className="text-primary" size={90} />
                <h4 className="mt-3">Our History</h4>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <div
                data-aos="fade-up"
                data-aos-duration="200"
                className="d-flex flex-column my-4 mx-4  align-items-center justify-content-center"
              >
                <ImBooks className="text-primary" size={90} />
                <h4 className="mt-3">Research</h4>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="d-flex flex-column my-4 mx-4  align-items-center justify-content-center"
              >
                <PiStudentLight className="text-primary" size={90} />
                <h4 className="mt-3">Students</h4>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="d-flex flex-column my-4 mx-4  align-items-center justify-content-center"
              >
                <GiWorld className="text-primary" size={90} />
                <h4 className="mt-3">Suitable Environment</h4>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="d-flex flex-column my-4 mx-4  align-items-center justify-content-center"
              >
                <GrCertificate className="text-primary" size={90} />
                <h4 className="mt-3">High QUality</h4>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Learning Steps */}
        <Container className="learns">
          <Row>
            <Col
              md={6}
              lg={6}
              sm={12}
              data-aos="fade-right"
              data-aos-duration="500"
            >
              <h3 className="fw-semibold">
                Welcome to Online Learning, you have important steps
              </h3>
              <p className="my-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequatur placeat modi dicta veniam eligendi numquam, facere
                iure cum illo rerum, repudiandae, perferendis inventore ratione
                eum minus? Nihil minima quisquam explicabo non iusto nam
                distinctio eveniet.
              </p>
              <p className="d-flex align-items-center justify-contents-around">
                <span>
                  <GoTriangleRight className="text-primary" size={30} />
                </span>{" "}
                Over 37 Lectures and 55.5 hours of content.
              </p>
              <p className="d-flex align-items-center justify-contents-around">
                <span>
                  <GoTriangleRight className="text-primary" size={30} />
                </span>{" "}
                Hands-on practical sessions for all students.
              </p>
              <p className="d-flex align-items-center justify-contents-around">
                <span>
                  <GoTriangleRight className="text-primary" size={30} />
                </span>{" "}
                Extra-moral and Extra-curricular activities for all classes.
              </p>

              <button className="buttons mt-5 btn_primary">
                <a href="" className="text-white">
                  Get Started
                </a>
              </button>
            </Col>

            <Col
              md={6}
              lg={6}
              sm={12}
              data-aos="fade-left"
              data-aos-duration="500"
              className="d-none d-md-block d-lg-block"
            >
              <img src={meet} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>

        {/* staffs */}
        <Container className="staffs">
          <Col>
            <h3 className="fw-bold m-5 text-primary text-center">
              Our Experienced Staff
            </h3>
          </Col>
          <Row>
            <Col md={4} lg={3} sm={12}>
              <TeachersCard
                imgUrl={
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                name={"Michael john"}
                text={"Professor"}
              />
            </Col>

            <Col md={4} lg={3} sm={12}>
              <TeachersCard
                imgUrl={
                  "https://plus.unsplash.com/premium_photo-1661505218403-c684557a824d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                name={"Favour Peters"}
                text={"Physics Teacher"}
              />
            </Col>
            <Col md={4} lg={3} sm={12}>
              <TeachersCard
                imgUrl={
                  "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                name={"James Effiong"}
                text={"Social Science Teacher"}
              />
            </Col>
            <Col md={4} lg={3} sm={12}>
              <TeachersCard
                imgUrl={
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                name={"Musa Habib"}
                text={"Eucationist"}
              />
            </Col>
          </Row>
        </Container>
        {/* Testimony */}
        <Container className="parents-discuss">
          <Parents />
        </Container>
      </main>
    </>
  );
}

export default About;

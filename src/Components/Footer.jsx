import { Container, Col, Row } from "react-bootstrap";
import "./button.scss";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
      once: false,
    });
  });
  return (
    <div>
      <Container className="text-muted footer_carrier" fluid>
        <Container className="mt-5 p-5 text-white">
          <Row>
            <Col md={6} lg={3} sm={12} className="mb-5">
              <h4 className="mb-4 fw-bold text-white">Nerissa High School</h4>
              <div className="mb-4 text-white-50 foot_intro fw-medium">
                <p>93 Surulere Way Off, Ikeja Avenue, Lagos State, Nigeria.</p>
              </div>
              <div data-aos="fade-up" className="circle_socials">
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  className="circle_content"
                >
                  <FaTwitter size={20} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className="circle_content"
                >
                  <FaFacebookF size={20} />
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-duration="700"
                  className="circle_content"
                >
                  <FaInstagram size={20} />
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12} className="mb-5">
              <h4 className="mb-4 fw-bold text-white">Newsletter</h4>

              <div className="mb-4 text-white-50 foot_intro fw-medium">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries
                </p>
                <button className="buttons btn_secondary">
                  <a
                    href=""
                    className="text-decoration-none text-black fw-medium"
                  >
                    Subscribe
                  </a>
                </button>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12} className="mb-5">
              <h4 className="mb-4 fw-bold text-white">Quick Links</h4>
              <div className=" text-white-50 mt-4 ">
                <p className="mb-3 fw-medium">
                  <a href="" className="text-white">
                    Home
                  </a>
                </p>
                <p className="mb-3 fw-medium">
                  <a href="/about" className="text-white">
                    About
                  </a>
                </p>
                <p className="mb-3 fw-medium">
                  <a href="/contact" className="text-white">
                    Contact
                  </a>
                </p>
                <p className="mb-3 fw-medium">
                  <a href="/admission" className="text-white">
                    Admission
                  </a>
                </p>
                <p className="mb-3 fw-medium">
                  <a href="/updates" className="text-white">
                    Updates
                  </a>
                </p>
                <p className="mb-3 fw-medium">
                  <a href="/rules" className="text-white">
                    Rules and Regulation
                  </a>
                </p>
                <p className="mb-3 fw-medium">
                  <a href="/login" className="text-white">
                    Login
                  </a>
                </p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12} className="mb-5">
              <h4 className="mb-4 fw-bold text-white">School Hours</h4>
              <div className="hours text-white-50 mt-4 ">
                <p className="d-flex align-items-center justify-content-between ">
                  Monday
                  <span className="me-4 me-md-0">7:30 - 15:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Tuesday<span className="me-4 me-md-0">7:30 - 15:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Wednesday<span className="me-4 me-md-0">7:30 - 15:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Thursday<span className="me-4 me-md-0">7:30 - 15:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Friday<span className="me-4 me-md-0">7:30 - 15:00</span>
                </p>
              </div>
            </Col>
          </Row>

          <Col md={12} sm={12}>
            <p className="text-center text-white-50 outro">
              Copyright &copy;2024 &nbsp; All Rights Reserved | This website is
              desinged by AllSpark Technologies{" "}
            </p>
          </Col>
        </Container>
      </Container>
    </div>
  );
}

export default Footer;

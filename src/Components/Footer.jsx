import { Container, Col, Row, Form, Button } from "react-bootstrap";
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
              <h4 className="mb-4 fw-bold text-white">Feliciano</h4>
              <div className="mb-4 text-white-50 foot_intro fw-medium">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div data-aos="fade-up" className="circle_socials">
                <div data-aos="fade-up" data-aos-duration="500" className="circle_content">
                  <FaTwitter size={20} />
                </div>
                <div data-aos="fade-up" data-aos-duration="600" className="circle_content">
                  <FaFacebookF size={20} />
                </div>
                <div data-aos="fade-up" data-aos-duration="700" className="circle_content">
                  <FaInstagram size={20} />
                </div>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12} className="mb-5">
              <h4 className="mb-4 fw-bold text-white">Open Hours</h4>
              <div className="hours text-white-50 mt-4 ">
                <p className="d-flex align-items-center justify-content-between ">
                  Monday
                  <span className="me-4 me-md-0">9:00 - 24:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Tuesday<span className="me-4 me-md-0">9:00 - 24:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Wednesday<span className="me-4 me-md-0">9:00 - 24:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Thursday<span className="me-4 me-md-0">9:00 - 24:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Friday<span className="me-4 me-md-0">9:00 - 02:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Saturday<span className="me-4 me-md-0">9:00 - 02:00</span>
                </p>
                <p className="d-flex align-items-center justify-content-between ">
                  Sunday<span className="me-4 me-md-0">9:00 - 02:00</span>
                </p>
              </div>
            </Col>

            <Col md={6} lg={3} sm={12} className="mb-5">
              <h4 className="mb-4 fw-bold text-white">Instagram</h4>

              <div className="image_carrier">
                <div className="image_inner">
                  <div className="images">
                    <img
                      src="https://img.freepik.com/free-photo/glass-red-wine-bar-counter_107420-65846.jpg"
                      alt=""
                    />
                    <img
                      src="https://lh5.googleusercontent.com/proxy/Y92K9AEx2MvccjftpR5WGQ8ywWcwa_fxjpGKwQ87Edao4HEr1m0GcX8uqyfD0dB5v6WzxfMwXSwJhQ-2VOJPVpFTXjS0j_11uLHOMnVdFMJ7l-8GHQIC"
                      alt=""
                    />
                    <img
                      src="https://www.diplomacyandcommerce.hr/wp-content/uploads/2020/09/PET8163-1200x801.jpg"
                      alt=""
                    />
                  </div>
                  <div className="images_2">
                    <img
                      src="https://www.baccoestate.co.za/wp-content/uploads/2023/06/bacco-family-of-wines.jpg"
                      alt=""
                    />
                    <img
                      src="https://visitowa.com/wp-content/uploads/2021/02/Cest-Le-Vin-Wine-Bar-and-Shop-scaled.jpg"
                      alt=""
                    />
                    <img
                      src="https://www.foodandwine.com/thmb/dz_rxCUU4HTu2zwSiAqWM3FCCEY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/What-Makes-A-Perfect-Wine-According-To-Pros-FT-BLOG-0130-e821d787c7b148348aaed437e5b1a70b.jpg"
                      alt=""
                    />
                  </div>
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
              </div>
              <div className="sub_form">
                <Form.Group controlId="formGridEmail">
                  <Form.Control
                    type="email"
                    className="shadow-none text-center border-0 rounded-1 p-3"
                    placeholder="Enter Email Address"
                    required
                  />
                </Form.Group>
                <div className="sub_btn mt-3">
                  <Button
                    className="border-0 rounded-1 btn_sub shadow-none"
                    type="submit"
                  >
                    Subscribe
                  </Button>
                </div>
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

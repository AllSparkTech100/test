import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./button.scss";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <Container className="text-muted footer_carrier" fluid>
        <Container className="mt-5 p-5 text-white">
          <Row>
            <Col md={3} sm={12} className="mb-5">
              <h4 className="mb-4 fw-bold text-white">Feliciano</h4>
              <div className="mb-4 text-white-50 foot_intro fw-medium">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="circle_socials">
                <div className="circle_content">
                  <FaTwitter size={20} />
                </div>
                <div className="circle_content">
                  <FaFacebookF size={20} />
                </div>
                <div className="circle_content">
                  <FaInstagram size={20} />
                </div>
              </div>
            </Col>
            <Col md={3} sm={12}  className="mb-5">
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

            <Col md={3} sm={12}  className="mb-5">
              <h4 className="mb-4 fw-bold text-white">Instagram</h4>
             
            </Col>

            <Col md={3} sm={12} className="mb-5">
              <h4 className="mb-4 fw-bold text-white">Newsletter</h4>

              <div className="mb-4 text-white-50 foot_intro fw-medium">
                <p>
                  Far far away, behind the word mountains, far from the countries
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
           <p className='text-center text-white-50 outro'>Copyright &copy;2024 &nbsp; All Rights Reserved | This website is desinged by AllSpark Technologies </p>
         </Col>
        </Container>
      </Container>
    </div>
  );
}

export default Footer;

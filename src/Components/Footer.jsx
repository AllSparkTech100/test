import { Container, Row, Col } from "react-bootstrap";
import "./components.scss";
import { FaTwitter, FaInstagram,FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <Container fluid="sm">
          <Row>
            <Col md={4} lg={4} sm={6}>
              <h4 className="fw-bold text-uppercase">
                mental health Plus <br /> and saner ltd.
              </h4>
            </Col>
            <Col md={3} lg={3} sm={6}>
              <h4 className="fw-bold text-uppercase">services</h4>
              <div className="text-white mb-3">
                <p className="my-2">Individual Therapy</p>
                <p className="my-2">Counseling Therapy</p>
                <p className="my-2">Career Therapy</p>
                <p className="my-2">Children Therapy</p>
                <p className="my-2">Couples Therapy</p>
                <p className="my-2">Group Therapy</p>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <h4 className="fw-bold text-uppercase">quick links</h4>

              <div className="my-3">
                <div className="link">
                  <a href="" className="text-white">
                    <FaWhatsapp size={30} />
                  </a>
                </div>
                <div className="link">
                  <a href="" className="text-white">
                    <FaFacebook size={30} />
                  </a>
                </div>
                <div className="link">
                  <a href="" className="text-white">
                    <FaTwitter size={30} />
                  </a>
                </div>
                <div className="link">
                  <a href="" className="text-white">
                    <FaInstagram size={30} />
                  </a>
                </div>
                <div className="link">
                  <a href="" className="text-white">
                    <FaLinkedinIn size={30} />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <h4 className="fw-bold text-uppercase">
                mental health Plus <br /> and saner ltd.
              </h4>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <h4 className="fw-bold text-uppercase">
                mental health Plus <br /> and saner ltd.
              </h4>
            </Col>
            <Col md={4} lg={4} sm={6}>
              <h4 className="fw-bold text-uppercase">
                mental health Plus <br /> and saner ltd.
              </h4>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;

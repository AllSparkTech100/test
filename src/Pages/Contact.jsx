import { Container, Row, Col } from "react-bootstrap";
import "./pages.scss";

function Contact() {
  return (
    <>
      <main className="">
        <div className="bg-image about_intro">
          <div className="about_text">
            <h3 className="text-white text-center fw-bold">Contact</h3>
            <p className="text-center">
              <a href="/" className="text-white fw-normal">
                Home
              </a>
            </p>
          </div>
        </div>

          <Container fluid>
            <div className="inner_info">
              <h2>Contact Information</h2>
            </div>
            <Row className="last-contact-section" gap={1}>
              <Col md={3} sm={12}>
                <p className="fs-5">
                  Address: 198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </Col>
              <Col md={3} sm={12}>
                <p className="fs-5">
                  Phone:&nbsp;
                  <span>
                    <a
                      href="tel:+2349027209415"
                      className="text-decoration-none"
                    >
                      + 2349027209415
                    </a>
                  </span>
                </p>
              </Col>
              <Col md={3} sm={12}>
                <p className="fs-5">
                  Email:&nbsp;
                  <span>
                    <a
                      href="mailto:yoursite@gmail.com"
                      className="text-decoration-none"
                    >
                      yoursite@gmail.com
                    </a>
                  </span>
                </p>
              </Col>
              <Col md={3} sm={12}>
                <p className="fs-5">
                  Phone:&nbsp;
                  <span>
                    <a
                      href="http://yoursite.com"
                      className="text-decoration-none"
                    >
                      yoursite.com
                    </a>
                  </span>
                </p>
              </Col>
            </Row>
          </Container>
      </main>
    </>
  );
}

export default Contact;

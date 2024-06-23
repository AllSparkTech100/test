import { Container, Col, Row } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import "./pages.scss";

function Contact() {
  return (
    <>
      <main>
        <Container fluid className="bg-image contact_intro">
          <h3 className="text-center fw-bold">Contact Us</h3>
        </Container>

        {/* Contact */}
        <Container className="mt-3 bg-primary">
          <Row>
            <Col>
              <h2 className="fw-bold">Contact Information</h2>
              <p className="fw-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                incidunt sequi soluta beatae voluptates ducimus?
              </p>

              <div className="contact_carrier">
                <div className="contact_images">
                  <FaHome />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Contact;

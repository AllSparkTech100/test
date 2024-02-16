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

        <Container>
          <Container>
            <div className="inner_info">
              <h2>Contact Information</h2>
            </div>
            <Row>
              <Col>
                <p>
                  Address: 198 West 21th Street, Suite 721 New York NY 10016
                </p>
              </Col>
              <Col>
                <p>
                  Phone: <span><a href="tel:+2349027209415" className="text-decoration-none">+ 2349027209415</a></span>
                </p>
              </Col>
              <Col></Col>
              <Col></Col>
            </Row>
          </Container>
        </Container>
      </main>
    </>
  );
}

export default Contact;

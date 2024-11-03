import { Container, Col, Row, Form } from "react-bootstrap";

function Contact() {
  return (
    <>
      <div className="contact-section-hero bg-image">
        <div className="contact-hero-inner mt-5">
          <h4 className="text-white">Contact Us</h4>
          <p className="text-white mt-4">
            start a conversation to establish <br /> good relationship and
            healthy well-being
          </p>
        </div>
      </div>

      <Container className="message-section">
        <Row>
          <Col md={6} sm={12} lg={6}>
            <div className="message-form">
              <h6 className="form-intro text-warning text-uppercase">
                send us a message
              </h6>
              <div className="fs-5 text-capitaize">
                Book a session or make an enquiry
              </div>
              <p className="mt-3">
                A aliquid quasi magni, ab minima nemo expedita reiciendis beatae
                ducimus quas earum provident perferendis sunt quae optio ratione
                excepturi tempora ipsa? Soluta numquam inventor.
              </p>
            </div>
            <div className="form-section">
              <Form>
                {/* Name and Email */}
                <Row className="mb-3">
                  <Form.Group as={Col} md={12} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="shadow-none p-2"
                      placeholder="Name"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="my-3">
                  <Form.Group as={Col} md={6} sm={6} controlId="formGridEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      className="shadow-none p-2"
                      placeholder="Input your phone number"
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={6} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="shadow-none p-2"
                      placeholder="Name"
                      required
                    />
                  </Form.Group>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;

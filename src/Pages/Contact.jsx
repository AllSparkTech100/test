import { Container, Col, Row, Form } from "react-bootstrap";
import workout from "../Images/work.svg";
import ContactCard from "../Components/ContactCard";
// import { useState } from "react";

function Contact() {
  // const [phone, setPhone] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(`Submitted phone number: ${phone}`);
  // };
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
                <Row className="mb-3">
                  <Form.Group as={Col} md={12} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="shadow-none p-3"
                      placeholder="Name"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="my-3">
                  <Form.Group as={Col} md={6} sm={6} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      className="shadow-none p-3"
                      placeholder="Enter number"
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={6} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="shadow-none p-3"
                      placeholder="Enter Email"
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="my-3">
                  <Form.Group as={Col} controlId="formGridMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      type="text"
                      className="shadow-none text-area"
                      placeholder="Send us a message"
                      required
                    />
                  </Form.Group>
                </Row>

                <div className="my-5">
                  <button className="bg-dark w-100 rounded-2 border-0 py-2 px-4 text-white">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={6} sm={12} lg={6}>
            <img
              src={workout}
              className="ms-5"
              width={"90%"}
              height={"90%"}
              alt="Healthy Life"
            />
          </Col>
        </Row>
      </Container>

      <Container className="contact-foot">
        <div className="text-center">
          <h4 className="text-warning text-uppercase ">Get in touch</h4>
          <h6>Seamless communication, global impact</h6>
        </div>

        <ContactCard />
      </Container>
    </>
  );
}

export default Contact;

import { Container, Col, Row, Form } from "react-bootstrap";
import workout from "../Images/work.svg";
import ContactCard from "../Components/ContactCard";
import { IoIosSend } from "react-icons/io";
import "./pages.scss";
import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      delay: 50,
      offset: 200,
      startEvent: "DOMContentLoaded",
    });
  });
  AOS.refresh();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rethcdh", "template_nhlmm65", form.current, {
        publicKey: "YA_tpjQuKZB7pXaRv",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
        e.target.reset()
      );
  };
  return (
    <>
      <Container fluid className="contact-section-hero bg-image">
        <div className="contact-hero-inner">
          <h4 className="text-white" data-aos="fade-up">
            Contact Us
          </h4>
          <div className="mt-2">
            {" "}
            <p className="text-white" data-aos="fade-down">
              start a conversation to establish <br /> good relationship and
              healthy well-being!
            </p>
          </div>
        </div>
      </Container>

      <Container className="message-section">
        <Row>
          <Col md={12} sm={12} lg={6}>
            <div data-aos="fade-up">
              <h6 className="form-intro text-warning text-uppercase">
                send us a message
              </h6>
              <div className="fs-3 text-capitalize">
                Book a session or make an enquiry
              </div>
              <p className="mt-3">
                A aliquid quasi magni, ab minima nemo expedita reiciendis beatae
                ducimus quas earum provident perferendis sunt quae optio ratione
                excepturi tempora ipsa? Soluta numquam inventor.
              </p>
            </div>
            <div className="form-section">
              <Form ref={form} onSubmit={sendEmail} data-aos="fade-left">
                <Row className="mb-3">
                  <Form.Group as={Col} md={12} controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="shadow-none p-3 p-lg-3 p-md-4"
                      placeholder="Name"
                      name="user_name"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="my-3">
                  <Form.Group as={Col} md={6} sm={6} controlId="formGridPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      className="shadow-none p-3 p-lg-3 p-md-4"
                      placeholder="Enter number"
                      name="user_phone"
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col} md={6} sm={6} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      className="shadow-none p-3 p-lg-3 p-md-4"
                      placeholder="Enter Email"
                      name="user_email"
                      required
                    />
                  </Form.Group>
                </Row>

                <Row className="my-3">
                  <Form.Group as={Col} controlId="formGridMessage">
                    <Form.Label>Message</Form.Label>
                  </Form.Group>
                  <Form.Group Col={12}>
                    <textArea
                      className="shadow-none p-3 w-100 text-area"
                      placeholder="Send Us a Message"
                      name="subject"
                    />
                  </Form.Group>
                </Row>

                <div className="my-5">
                  <button className="bg-dark w-100 rounded-2 border-0 py-2 py-lg-2 px-lg-4 py-md-4 px-md-5 px-4 text-white">
                    <IoIosSend size={30} /> Submit
                  </button>
                </div>
              </Form>
            </div>
          </Col>
          <Col md={12} sm={12} lg={6} data-aos="fade-right">
            <img
              src={workout}
              className="ms-5 d-none d-md-block d-lg-block"
              width={"90%"}
              height={"90%"}
              alt="Healthy Life"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>

      <Container className="contact-foot p-0 p-md-5 p-lg-5" fluid>
        <div className="text-center">
          <h4 className="text-warning text-uppercase " data-aos="fade-up">
            Get in touch
          </h4>
          <h6 data-aos="fade-up">
            Seamless communication, <br /> global impact
          </h6>
        </div>

        <ContactCard />
      </Container>
    </>
  );
}

export default Contact;

import { Container, Form, Col, Row } from "react-bootstrap";
import {
  FaHome,
  FaPhoneAlt,
  FaGooglePlusG,
  FaInstagram,
  FaFacebookF,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import "./pages.scss";

function Contact() {
  return (
    <>
      <main>
        <Container fluid className="bg-image contact_intro">
          <h3 className="text-center fw-bold">Contact Us</h3>
        </Container>

        {/* Contact */}
        <Container className="mt-3 contact_carrier">
          <Row className="contact-inner">
          {/* First container information */}
            <Col
              md={6}
              lg={6}
              sm={12}
              className="p-3 p-md-5 p-lg-5 bg-secondary"
            >
              <h2 className="fw-bold text-warning mt-3 mt-md-0 mt-lg-0">Contact Information</h2>
              <p className="fw-normal text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                incidunt sequi soluta beatae voluptates ducimus?
              </p>

              <div className="contacts">
                <div className="contact-info">
                  <div className="contact_images mt-3">
                    <FaHome size={20} />
                  </div>
                  <h6 className="ms-3 mt-4 text-white me-0 mb-0">
                    93 Surulere Way off,
                    <br /> Ikeja Avenue, Lagos State, Nigeria
                  </h6>
                </div>

                <div className="contact-info">
                  <div className="contact_images mt-3">
                    <HiOutlineMailOpen size={20} />
                  </div>
                  <h6 className="ms-3 mt-4 text-white me-0 mb-0">
                    <a
                      className="text-white"
                      href="mailto:info@nerrisahighschool.com "
                    >
                      info@nerrisahighschool.com{" "}
                    </a>
                    <br />{" "}
                    <a
                      className="text-white"
                      href="mailto:nerrisahighschool@gmail.com"
                    >
                      nerrisahighschool@gmail.com
                    </a>
                  </h6>
                </div>
                <div className="contact-info">
                  <div className="contact_images mt-3">
                    <FaPhoneAlt size={20} />
                  </div>
                  <h6 className="ms-3 mt-4 mb-0 me-0">
                    <a href="tel:+23480498578398" className="text-white">
                      (+234)80498578398
                    </a>
                    <br />
                    <a href="tel:+23480495889384" className="text-white">
                      (+234)80495889384
                    </a>
                  </h6>
                </div>
              </div>

              <div className="mt-5 mb-5 more_socials">
                <h4 className="text-white fw-medium">Follow Us Via:</h4>
                <div className="icons my-4 d-flex align-items-center">
                  <div className="icon-carrier">
                    <div className="first_icon bg-danger">
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        <FaInstagram size={25} />
                      </a>
                    </div>
                    <div className="first_icon ms-2 bg-primary">
                      <a
                        href="http://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaFacebookF size={20} />
                      </a>
                    </div>
                    <div className="first_icon ms-2 bg-white">
                      <a
                        className="text-dark"
                        href="http://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGooglePlusG size={20} />
                      </a>
                    </div>
                    <div className="first_icon ms-2 bg-danger">
                      <a
                        href="http://www.pinterest.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPinterest size={20} />
                      </a>
                    </div>
                    <div className="first_icon ms-2 bg-primary">
                      <a
                        href="http://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>


            
            {/* Form Container */}
            <Col md={6} lg={6} sm={12} className="bg-white p-3 p-md-5 p-lg-5">
              <h2 className="fw-bold text-dark mt-3 mt-md-0 mt-lg-0">Get in touch</h2>
              <p className="fw-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                incidunt sequi soluta beatae voluptates ducimus?
              </p>
              <div>
                <Form>
                  {/* Name and Email */}
                  <Row>
                    <Form.Group
                      as={Col}
                      md={12}
                      lg={12}
                      sm={12}
                      controlId="formGridName"
                    >
                      <Form.Control
                        type="text"
                        className="shadow-none border-1 border-primary rounded-5 mb-4 mt-5 p-3"
                        placeholder="Name"
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md={12}
                      lg={12}
                      sm={12}
                      controlId="formGridEmail"
                    >
                      <Form.Control
                        type="email"
                        className="shadow-none border-1 border-primary rounded-5  mb-4 p-3"
                        placeholder="Email"
                        required
                      />
                    </Form.Group>
                  </Row>
                  {/* Subject and Comment */}
                  <Row>
                    <Form.Group
                      as={Col}
                      md={12}
                      lg={12}
                      sm={12}
                      controlId="formGridSubject"
                    >
                      <Form.Control
                        type="text"
                        className="shadow-none border-1 border-primary mb-4 rounded-5 p-3"
                        placeholder="Phone"
                        maxLength={20}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md={12}
                      lg={12}
                      sm={12}
                      controlId="formGridTextArea"
                    >
                      <Form.Control
                        as="textarea"
                        type="textarea"
                        className="shadow-none border-1 border-primary rounded-4 p-3"
                        placeholder="Comments"
                        required
                      />
                    </Form.Group>
                  </Row>
                  {/* Send Button */}
                  <div className="mt-5">
                    <buttton className="buttons btn_primary">
                      <a href="">Send us a Message</a>
                    </buttton>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Contact;

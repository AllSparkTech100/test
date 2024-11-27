import "./components.scss";
import { Row, Col } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import { IoCall } from "react-icons/io5";

function ContactCard() {
  return (
    <>
      <Row className="mt-5">
        <Col sm={12} md={6} lg={4}>
          <div className="contact-carrier py-0 px-3 mt-3 mb-3 mx-2 text-center">
            <div className="my-3 square fw-normal p-3 text-white">
              <FaLocationDot size={30} />
            </div>
            <h3 className="mt-3 mb-3">Head Office</h3>
            <p> 16 Lekki Avenue, Ikeja Lagos state.</p>
          </div>
        </Col>

        <Col sm={12} md={6} lg={4}>
          <div className="contact-carrier py-0 px-3 mt-3 mb-3 mx-2 dark-card text-white text-center">
            <div className="my-3 square fw-normal text-white">
              <GoMail size={30} />
            </div>
            <h3 className="mb-3">Email Us</h3>
            <p className=""><a href="mailto:mentalhealthpus24@gmail.com" className="text-decoration-none text-white">mentalhealthpus24@gmail.com</a></p>
            <p className=""><a href="mailto:comfortikangenyin@gmail.com" className="text-decoration-none text-white">comfortikangenyin@gmail.com</a></p>
          </div>
        </Col>

        <Col sm={12} md={12} lg={4}>
          <div className="contact-carrier py-0 px-3 mt-3 mb-3 mx-2 text-center">
            <div className="my-3  square fw-normal text-warning">
              <IoCall size={30} className="text-white" />
            </div>
            <h3 className="mb-3">Let&apos;s Talk</h3>
            <p className="my-1 fw-bold">
              Phone: <span className="fw-normal">+2348071277101</span>
            </p>
            <p className="my-1 fw-bold">
              WhatsApp: <span className="fw-normal">+2348149944531</span>
            </p>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default ContactCard;

import { Container, Row, Col } from "react-bootstrap";
import "./components.scss";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";


function Footer() {
  // const [isHover, setIsHover] = useState(null);
  // useEffect(()=>{

  // });
  const [year, setYear] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Container fluid className="footer">
        <div className="foot-inner">
          <Row>
            <Col md={4} lg={4} sm={6} className="my-4">
              <h4 className="fw-bold ms-md-5 ms-lg-5 text-uppercase">
                mental health Plus <br /> and saner ltd.
              </h4>
            </Col>
            <Col md={3} lg={3} sm={6} className="my-4">
              <h4 className="fw-bold text-uppercase">services</h4>
              <div className="text-white serve-inner mb-3">
                <p className="my-2 serv-type fw-medium">Individual Therapy</p>
                <p className="my-2 serv-type fw-medium">Counseling Therapy</p>
                <p className="my-2 serv-type fw-medium">Career Therapy</p>
                <p className="my-2 serv-type fw-medium">Children Therapy</p>
                <p className="my-2 serv-type fw-medium">Couples Therapy</p>
                <p className="my-2 serv-type fw-medium">Group Therapy</p>
              </div>
            </Col>
            <Col md={4} lg={4} sm={6} className="my-4">
              <h4 className="fw-bold text-uppercase ">quick links</h4>
              <div className="text-white mb-3 link-section">
                <p className="quick">
                  <a href="/">Home</a>
                </p>
                <p className="quick">
                  <a href="/contact">Contact Us</a>
                </p>
                <p className="quick">
                  <a href="/about">About Us</a>
                </p>
                <p className="quick">
                  <a href="/services">Our Services</a>
                </p>
              </div>
            </Col>
          </Row>

          <div className="col-12">
            <hr />
            <div className="social-links ">
              <div className="d-flex align-items-center mb-md-0 mb-lg-0 mb-4">
                <div className="mt-3 icon-carrier">
                  <a href="https://wa.link/1w05vq" target="_blank">
                    <FaWhatsapp size={25} />
                  </a>
                </div>
                <div className="mt-3 ms-2 icon-carrier">
                  <a
                    href="https://www.facebook.com/profile.php?id=100007594127802"
                    target="_blank"
                  >
                    <FaFacebook size={25} />
                  </a>
                </div>
                <div className="mt-3 ms-2 icon-carrier">
                  <a href="https://x.com/Cognitherapist" target="_blank">
                    <FaTwitter size={25} />
                  </a>
                </div>
                <div className="mt-3 ms-2 icon-carrier">
                  <a
                    href="https://www.instagram.com/cognitherapist/"
                    target="_blank"
                  >
                    <FaInstagram size={25} />
                  </a>
                </div>
                <div className="mt-3 ms-2 icon-carrier">
                  <a
                    href="https://ng.linkedin.com/in/alexandercomfort?trk=public_post_feed-actor-name"
                    target="_blank"
                  >
                    <FaLinkedinIn size={25} />
                  </a>
                </div>
              </div>
              <p className="text-white">
                Copyright &copy; {year} Mental Health Plus and Saner Ltd
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Footer;

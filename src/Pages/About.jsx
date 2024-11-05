import { Container, Col, Row, Card } from "react-bootstrap";
import { FaChildren, FaUserSecret } from "react-icons/fa6";
import { MdOutlineGroupAdd } from "react-icons/md";
import ServiceCard from "../Components/ServiceCard";
import "./pages.scss";

function About() {
  return (
    <>
      <Container fluid className="about-section-hero bg-image">
        <div className="contact-hero-inner">
          <h4 className="text-white">About Us</h4>
          <div className="mt-4">
            {" "}
            <p className="text-white">A healthier Choice for a heathier you!</p>
          </div>
        </div>
      </Container>

      <Container fluid>
        <section className="middle-holder">
          <Container className="p-lg-5 p-sm-0 p-md-5" fluid>
            <Row>
              <Col md={6} sm={12} lg={6}>
                <section>
                  <div className="mid-intro">
                    <h5 className="fw-bold">Who We Are</h5>
                    <h3 className="text-sentence fw-medium">
                      Mental Health is a human Right <br /> Not a Privilage
                    </h3>
                  </div>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum debitis, illo natus quam, magnam architecto
                    aliquid dignissimos suscipit dolorem, assumenda incidunt
                    eaque iure inventore placeat numquam enim reprehenderit?
                    Reiciendis soluta architecto fugiat culpa recusandae,
                    numquam labore eos deserunt pariatur at.
                  </p>
                  {/* Different Therapies */}
                  <div className="mid-options">
                    <div className="option">
                      <div className="option-icon">
                        <FaChildren size={30} />
                      </div>
                      <div className="option-text">
                        <h5 className="text-capitalize">Children therapy</h5>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni debitis iste quisquam, dolorum assumenda
                          fuga odit eligendi accusamus blanditiis impedit
                          officiis, natus quis laboriosam quasi itaque animi
                          soluta et! Aut.
                        </p>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-icon">
                        <FaUserSecret size={30} />
                      </div>
                      <div className="option-text">
                        <h5 className="text-capitalize">Individual coaching</h5>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni debitis iste quisquam, dolorum assumenda
                          fuga odit eligendi accusamus blanditiis impedit
                          officiis, natus quis laboriosam quasi itaque animi
                          soluta et! Aut.
                        </p>
                      </div>
                    </div>
                    <div className="option">
                      <div className="option-icon">
                        <MdOutlineGroupAdd size={30} />
                      </div>
                      <div className="option-text">
                        <h5 className="text-capitalize">Group therapy</h5>

                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magni debitis iste quisquam, dolorum assumenda
                          fuga odit eligendi accusamus blanditiis impedit
                          officiis, natus quis laboriosam quasi itaque animi
                          soluta et! Aut.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </Col>
              <Col md={6} sm={12} lg={6}>
                <section>
                  <div className="middle-right-hero-image bg-image">
                    {/* <h5 className="fw-bold">Who We Are</h5>
                  <h3 className="text-sentence fw-medium">
                    Mental Health is a human Right <br /> Not a Privilage
                  </h3> */}
                  </div>
                </section>
              </Col>
            </Row>
          </Container>
        </section>
        {/* services */}
        <section className="service-container container-fluid">
          {/* Services */}
          <Container className="mt-5 p-md-5 p-lg-5 py-3" fluid>
            <ServiceCard />
          </Container>
        </section>
        {/* Image with Circle */}
        <section className="better bg-image">
          <div className="circle p-5 text-center">
            <h2 className="text-warning text-uppercase mb-3 fs-5">Our Value</h2>
            <h4 className="text-capitalize fs-2 mb-3 mt-3">
              Bringing Therapy to <br /> the Common Man
            </h4>
            <p className="my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
              laboriosam. Itaque, officia. Incidunt esse aut officiis odit qui!
              Illum facere repellendus porro tempora velit vero?
            </p>
            <button className="bg-dark btn rounded-5 my-3">
              <a href="#" className="text-white">
                Discover More
              </a>
            </button>
          </div>
        </section>

        <Container fluid className="portfolio">
          <div className="introduction">
            <h4 className="fw-bold text-uppercase">meet our ceo</h4>
          </div>

          <Row className="mt-5">
            <Col sm={12} md={4} lg={4} className="mt-3 mb-3">
              <Card>
                <Card.Img
                  variant="top"
                  src=""
                  loading="lazy"
                  alt="Alexander Comfort"
                />
                <Card.Body>
                  <Card.Title>Miss Alexander Comfort</Card.Title>
                  <Card.Text>CEO Mental Health Plus and Saner LTD.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={8} lg={8} className="mt-3 mb-3 ms-3">
              <p className="fw-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quis doloremque? Ratione necessitatibus nihil omnis
                voluptate nisi magni quo repudiandae amet soluta, eum nulla.
                Minima ducimus, aliquid laudantium, vero a saepe sequi ab eius
                magni consequatur voluptates odio quis corporis cum aut animi
                beatae adipisci fuga qui sunt! Vitae, tempora.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;

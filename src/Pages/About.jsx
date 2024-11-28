import { Container, Col, Row, Card } from "react-bootstrap";
import { FaChildren, FaUserSecret } from "react-icons/fa6";
import { MdOutlineGroupAdd } from "react-icons/md";
import ServiceCard from "../Components/ServiceCard";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbBrandLinktree } from "react-icons/tb";
import CEO from "../Images/comfort.jpg";
import Counsel from "../Images/child counsel.jpeg";
import "./pages.scss";

function About() {
  return (
    <>
      <Container fluid className="about-section-hero bg-image">
        <div className="contact-hero-inner">
          <h4 className="text-white">About Us</h4>
          <div className="mt-2 mt-md-4 mt-lg-4">
            {" "}
            <p className="text-white">A healthier Choice for a heathier you!</p>
          </div>
        </div>
      </Container>

      <section className="middle-holder">
        <Container className="p-lg-5 p-sm-0 p-md-5" fluid>
          <Row className="flex-md-column flex-lg-column">
            <Col md={12} sm={12} lg={12} className="mb-0 mb-md-5 mb-lg-5">
              <section>
                <div className=" d-md-block d-lg-block middle-right-hero-image">
                  <img src={Counsel} alt="Child Counselling" loading="lazy" />
                </div>
              </section>
            </Col>
            <Col md={12} sm={12} lg={12}>
              <section>
                <div className="mid-intro">
                  <h5 className="fw-bold">Who We Are</h5>
                  <h3 className="text-sentence my-3 fw-medium">
                    Mental Health is a human Right <br /> Not a Privilage
                  </h3>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatum debitis, illo natus quam, magnam architecto
                    aliquid dignissimos suscipit dolorem, assumenda incidunt
                    eaque iure inventore placeat numquam enim reprehenderit?
                    Reiciendis soluta architecto fugiat culpa recusandae,
                    numquam labore eos deserunt pariatur at.
                  </p>
                </div>

                {/* Different Therapies */}
                <div className="mid-options mt-5">
                  <div className="option">
                    <div className="option-icon">
                      <FaChildren size={30} />
                    </div>
                    <div className="option-text ">
                      <h5 className="text-capitalize">Children therapy</h5>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni debitis iste quisquam, dolorum assumenda fuga odit
                        eligendi accusamus blanditiis impedit officiis, natus
                        quis laboriosam quasi itaque animi soluta et! Aut.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni debitis iste quisquam, dolorum assumenda fuga odit
                        eligendi accusamus blanditiis impedit officiis, natus
                        quis laboriosam quasi itaque animi soluta et! Aut.
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni debitis iste quisquam, dolorum assumenda fuga odit
                        eligendi accusamus blanditiis impedit officiis, natus
                        quis laboriosam quasi itaque animi soluta et! Aut.
                      </p>
                    </div>
                  </div>
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
          <h2 className="text-warning text-uppercase mb-md-3 mb-1">
            Our Value
          </h2>
          <h4 className="text-capitalize mb-md-3 mb-1 mt-md-3 mt-1">
            Bringing Therapy to <br /> the Common Man
          </h4>
          <p className="my-md-3 my-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
            laboriosam. Itaque, officia. Incidunt esse aut officiis odit qui!
            Illum facere repellendus porro tempora velit vero?
          </p>
          <button className="bg-dark btn rounded-5 my-3 py-md-4 px-md-5">
            <a href="#" className="text-white">
              Discover More
            </a>
          </button>
        </div>
      </section>

      <Container className="portfolio">
        <div className="introduction">
          <h4 className="fw-bold text-uppercase text-decoration-underline">
            meet our ceo
          </h4>
        </div>

        <Row className="mt-5 gx-5 flex-md-column flex-lg-row">
          <Col sm={12} md={6} lg={4} className="mt-3 mb-3">
            <Card className="border-0 h-100 h-md-75 carrd">
              <Card.Img
                variant="top"
                src={CEO}
                loading="lazy"
                alt="Alexander Comfort"
               
              />
              <Card.Body className="p-3 border-0 bg-dark text-white text-center rounded-bottom-5">
                <Card.Title className="my-3 fw-bold">
                  Miss Alexander Comfort
                </Card.Title>
                <Card.Text className="my-3">
                  CEO Mental Health Plus and Saner LTD.
                </Card.Text>
              </Card.Body>
              <div className="social-likes">
                <div className="likes">
                  <div>
                    <a
                      href="https://ng.linkedin.com/in/alexandercomfort?trk=public_post_feed-actor-name"
                      className="text-dark"
                      target="_blank"
                    >
                      <FaLinkedinIn size={20} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.instagram.com/cognitherapist/"
                      className="text-dark"
                      target="_blank"
                    >
                      <FaInstagram size={20} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://x.com/Cognitherapist"
                      className="text-dark"
                      target="_blank"
                    >
                      <FaTwitter size={20} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://linktr.ee/alexandercomfort?fbclid=IwY2xjawGXHzRleHRuA2FlbQIxMAABHXZcpw-IWCNMDL5ZHdvdoEhPvKHae8LuTVyvOJItmXfR7RKVt7CinYZwkQ_aem_rxzbBEAA7gl_r03ZfQvW9g"
                      target="_blank"
                      className="text-dark"
                    >
                      <TbBrandLinktree size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={8} className="mt-3 mb-3">
            <div className="mt-4 texts">
              <p className="fw-normal my-2">
                Alexander Comfort is a practicing counseling psychologist
                specializing in Clinical and Mental Health Counseling. With a
                strong commitment to advancing mental health awareness and
                education, Alexander has spearheaded various initiatives across
                Nigeria, bringing critical mental health discussions to diverse
                audiences.
              </p>
              <p className="fw-normal my-4">
                She parades herself in telling Mental health stories the African
                way. Her mission is clear - it is to inspire a widespread shift
                towards proactive mental health practices, fostering healthier
                and sounder lives for all, equipping individuals with the tools
                to navigate Mental health challenges, prevent triggers and
                cultivate a holistic wellbeing.
              </p>
              <p className="fw-normal my-4">
                One of her notable achievements includes training over a
                thousand staff members of the Niger Delta Development Commission
                on &ldquo;The Psychology of Debt.&ldquo; This empowering
                discussion explored the profound impact of our relationship with
                money on overall well-being and mental health, providing
                valuable insights into how mindset shapes financial behaviors
                and mental health outcomes.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;

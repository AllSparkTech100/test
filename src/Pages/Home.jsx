import { Container, Row, Col } from "react-bootstrap";
import "./pages.scss";
import { FaChildren, FaUserSecret } from "react-icons/fa6";
import { MdOutlineGroupAdd } from "react-icons/md";
import ServiceCard from "../Components/ServiceCard";
import therapist from "../Images/therapist.jpeg";
import therapy from "../Images/therap2.jpeg";

function Home() {
  return (
    <>
      {/* Hero */}
      <Container className="hero-carrier" fluid>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <section className="mt-5 p-lg-3 p-sm-0">
              <h4 className="text-warning text-uppercase">
                mental health plus and saner ltd.
              </h4>

              <h3 className="mt-3">
                A healthy Mind is <br /> a Wealthy Soul
              </h3>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                ullam delectus quas distinctio adipisci sint cumque? Et quod
                natus iusto!
              </p>
              <div className="btn-carrier mt-4">
                <button className="btn-yellow fw-medium text-uppercase">
                  <a href="#">Get Started</a>
                </button>
                <button className="btn-transparent  fw-medium text-uppercase">
                  <a href="#">Contact Us</a>
                </button>
              </div>
            </section>
            <hr />
            <div className="counter mt-1 p-lg-3 p-md-3 p-sm-0">
              <div>
                <h3 className="fw-medium">25+</h3>
                <p>Years Experience</p>
              </div>
              <div>
                <h3 className="fw-medium">7.8k+</h3>
                <p>Active Members</p>
              </div>
              <div>
                <h3 className="fw-medium">99%</h3>
                <p>Satisfied Clients</p>
              </div>
            </div>
          </Col>

          {/* rigth image column*/}
          <Col
            lg={6}
            md={6}
            sm={12}
            className="right-hero-image d-lg-block d-md-block d-sm-none bg-image"
          ></Col>
        </Row>
      </Container>

      {/* Middle section */}
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
        {/* What you get */}
        <Container className="offer-carrier" fluid>
          <section className="bg-white offers mx-md-5 mx-lg-5">
            <Row>
              <Col sm={12} md={6} lg={6} className="left-prof">
                <h3 className="prof-serv-head">Professional Services</h3>
                <h5 className="">We want you to get the care you deserve</h5>
                <p className="my-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremnam repudiandae molestiae, similique totam ad?nam
                  repudiandae molestiae, similique totam ad?nam repudiandae
                  molestiae, similique totam ad? nam repudiandae molestiae,
                  similique totam ad?
                </p>
                <ul>
                  <li>Individuals with high stress</li>
                  <li>People with Anxiety or Depression</li>
                  <li>Busy Professionals</li>
                  <li>Communities in need of Emotional Support</li>
                  <li>Individuals Seeking Personal Growth</li>
                </ul>
              </Col>

              <Col sm={12} md={6} lg={6}>
                <div className="grid-container">
                  <div className="grid-item image-item image-item-1">
                    <img src={therapy} loading="lazy" alt="Therapy Session" />
                  </div>
                  <div className="grid-item image-item">
                    <img
                      src={therapist}
                      loading="lazy"
                      alt="Therapy Session "
                    />
                  </div>
                  <div className="grid-item text-item">
                    <div className="experience-text">
                      <span className="text-warning years">25+</span>
                      <div className="description">Years of Experience</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </Container>

        <Container className="offer-container bg-image" fluid>
          <div className="container-inner  ms-md-5 ms-lg-5 ms-0">
            <h3 className="text-white d-none d-md-block d-lg-block">
              Take the firts step towards wellness <br /> with Mental Health
              Plus and Saner Ltd.
            </h3>
            <h3 className="text-white d-md-none d-lg-none mt-3 mb-4 d-block">
              Take the firts step towards wellness with Mental Health Plus and
              Saner Ltd.
            </h3>
            <div>
              <p className="text-white text-justify mt-4 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                ipsa, culpa corrupti repellendus et totam?
              </p>
            </div>
            <div>
              <button className="btn-white mt-3  ">
                <a href="#" className="text-black fw-medium">
                  Get Started
                </a>
              </button>
            </div>
          </div>
        </Container>
      </Container>

      {/* <Container className="call-volunteers">
       <Col md={12} lg={12} sm={12}>
       <div className="">
          <h4>Join Us</h4>
          <p className="fs-3 mt-4">
            The Professional Licensed and <br /> Vetted Psychologist Who you can Trust
          </p>
        </div>
       </Col>
      </Container> */}
    </>
  );
}

export default Home;

import { Container, Row, Col } from "react-bootstrap";
import "./pages.scss";
import { FaChildren, FaUserSecret } from "react-icons/fa6";
import { MdOutlineGroupAdd } from "react-icons/md";
import ServiceCard from "../Components/ServiceCard";
import therapist from "../Images/therapist.jpeg";
import therapy from "../Images/therap2.jpeg";
import counsel from "../Images/counsel.jpeg";
import Counsel from "../Images/child counsel.jpeg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
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
  return (
    <>
      {/* Hero */}
      <Container className="hero-carrier" fluid>
        <Row>
          <Col lg={6} md={6} sm={12} data-aos="fade-left">
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
                <div className="">
                  <button className="btn-yellow fw-medium text-uppercase">
                    <a href="#">Get Started</a>
                  </button>
                </div>
                <div className="">
                  <button className="btn-transparent  fw-medium text-uppercase">
                    <a href="#">Contact Us</a>
                  </button>
                </div>
              </div>
            </section>
            <hr />
            <div className="counter mt-1 p-lg-3 p-md-3 p-sm-0">
              <div className="me-md-3 me-lg-3 m-1">
                <h3 className="">25+</h3>
                <p>Years Experience</p>
              </div>
              <div className="me-md-3 me-lg-3 m-1">
                <h3 className="">7.8k+</h3>
                <p>Active Members</p>
              </div>
              <div className="ms-md-3 ms-lg-3 m-1">
                <h3 className="">99%</h3>
                <p>Satisfied Clients</p>
              </div>
            </div>
          </Col>

          {/* rigth image column*/}
          <Col
            lg={6}
            md={6}
            sm={12}
            className="right-hero-image d-lg-block d-md-block d-none"
          >
            <img src={counsel} alt="" loading="lazy" />
          </Col>
        </Row>
      </Container>

      {/* Who we are */}

      <section className="middle-holder">
        <Container className="p-lg-5 p-sm-0 p-md-5" fluid>
          <Row className="flex-md-column flex-lg-column">
            <Col md={12} sm={12} lg={12} className="mb-0 mb-md-5 mb-lg-5">
              <section>
                <div
                  className=" d-md-block d-lg-block middle-right-hero-image"
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="10"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                >
                  <img src={Counsel} alt="Child Counselling" loading="lazy" />
                </div>
              </section>
            </Col>
            <Col md={12} sm={12} lg={12}>
              <section>
                <div className="mid-intro">
                  <h5 className="fw-bold" data-aos="fade-up">
                    Who We Are
                  </h5>
                  <h3
                    className="text-sentence my-3 fw-medium"
                    data-aos="fade-up"
                  >
                    Mental Health is a human Right <br /> Not a Privilage
                  </h3>
                  <p data-aos="fade-up">
                   We want to break down the barriers in recieving effective treatment and care for anxiety, stress and mental health related issues.
                  </p>
                </div>

                {/* Different Therapies */}
                <div className="mid-options mt-5">
                  <div className="option" data-aos="fade-up">
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
                  <div className="option" data-aos="fade-up">
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
                  <div className="option" data-aos="fade-up">
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

      {/* Services */}
      <section className="service-container container-fluid">
        <Container className="mt-5 p-md-5 p-lg-5 py-3" fluid>
          <ServiceCard />
        </Container>
      </section>
      {/* Image with Circle */}
      <section className="better bg-image" data-aos="zoom-in">
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
      {/* What you get */}
      <Container className="offer-carrier" fluid>
        <section className="bg-white offers mx-md-5 mx-lg-5">
          <Row>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="left-prof"
              data-aos="fade-up"
            >
              <h3 className="prof-serv-head">Professional Services</h3>
              <h5 className="" data-aos="fade-left">
                We want you to get the care you deserve !!!
              </h5>
              <p className="my-3" data-aos="fade-up">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremnam repudiandae molestiae, similique totam ad?nam
                repudiandae molestiae, similique totam ad?
              </p>
              <ul>
                <li data-aos="fade-left">Individuals with high stress</li>
                <li data-aos="fade-right">People with Anxiety or Depression</li>
                <li data-aos="fade-left">Busy Professionals</li>
                <li data-aos="fade-right">
                  Communities in need of Emotional Support
                </li>
                <li data-aos="fade-left">
                  Individuals Seeking Personal Growth
                </li>
              </ul>
            </Col>

            <Col sm={12} md={12} lg={6}>
              <div className="grid-container mt-md-5">
                <div
                  className="grid-item image-item image-item-1"
                  data-aos="flip-up"
                >
                  <img src={therapy} loading="lazy" alt="Therapy Session" />
                </div>
                <div className="grid-item image-item" data-aos="flip-down">
                  <img src={therapist} loading="lazy" alt="Therapy Session " />
                </div>
                <div className="grid-item text-item" data-aos="flip-left">
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
      <Container className="offer-container bg-image" data-aos="zoom-in-down">
        <div className="container-inner ms-md-5 ms-lg-5 ms-0">
          <h3 className="text-white d-none d-md-block d-lg-block">
            Take the first step towards wellness <br /> with Mental Health Plus
            and Saner Ltd.
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
            <button className="btn-white mt-3 py-md-4 px-md-5  ">
              <a
                href="mailto:mentalhealthplus24@gmail.com"
                className="text-black fw-medium"
              >
                Get Started
              </a>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;

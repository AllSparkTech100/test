import { Container, Row, Col } from "react-bootstrap";
import "./pages.scss";
import { FaChildren, FaUserSecret } from "react-icons/fa6";
import { MdOutlineGroupAdd } from "react-icons/md";
import ServiceCard from "../Components/ServiceCard";
import therapist from "../Images/therapist.jpeg";
import therapy from "../Images/therap2.jpeg";
import counsel from "../Images/counsel.jpeg";
import Counsel from "../Images/child counsel.jpeg";
import Counter from "../Components/Counter";
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
          <Col lg={6} md={6} sm={12} data-aos="fade-up">
            <section className="mt-5 p-lg-3 p-sm-0">
              <h4 className="text-warning text-center text-md-start text-lg-start text-uppercase">
                mental health plus and saner ltd.
              </h4>

              <h3 className="mt-3 text-center text-md-start text-lg-start">
                A healthy Mind is <br /> a Wealthy Soul
              </h3>
              <p className="mt-3">
                Invest in your mental health through practices like mindfulness,
                therapy, journaling, or simply taking time to rest. Remember,
                when your mind is healthy, your soul flourishes—and that&apos;s
                the true wealth we should all strive for. Take the first step
                toward your mental wellness today, because a wealthy soul begins
                with a healthy mind.
              </p>
              <div className="btn-carrier mt-4">
                <div className="">
                  <button className="btn-yellow fw-medium text-uppercase">
                    <a href="https://wa.link/1w05vq" target="_blank">
                      Get Started
                    </a>
                  </button>
                </div>
                <div className="">
                  <button className="btn-transparent  fw-medium text-uppercase">
                    <a href="https://wa.link/1w05vq" target="_blank">
                      Contact Us
                    </a>
                  </button>
                </div>
              </div>
            </section>
            <hr />
            <Counter />
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

      <section className="middle-holder container-fluid">
        <Container className="p-lg-5 p-sm-0 p-md-5" fluid>
          <Row className="">
            <Col
              md={12}
              sm={12}
              lg={12}
              data-aos="zoom-in"
              className="mb-0 mb-md-5 mb-lg-5"
            >
              <section>
                <div className=" d-md-block d-lg-block middle-right-hero-image">
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
                  <p
                    data-aos="fade-up"
                    className="w-70 w-md-50 w-lg-50 mt-lg-4 text-center"
                  >
                    We want to break down the barriers in recieving effective
                    treatment and care for <br /> anxiety, stress and mental
                    health related issues.
                  </p>
                </div>

                {/* Different Therapies */}
                <div className="mid-options row mt-5">
                  <div className="col-12 col-md-12 col-lg-4 mt-md-3 mt-lg-3 mt-3">
                    <div
                      className="option card border-5 border-dark  text-center p-md-4 h-100 rounded-5 p-4"
                      data-aos="fade-up"
                    >
                      <div className="option-icon">
                        <FaChildren size={30} />
                      </div>
                      <div className="option-text ">
                        <h5 className="text-capitalize card-title fs-2">
                          Children therapy
                        </h5>

                        <p className="card-text fs-5">
                          Uses age-appropriate techniques to help children
                          process emotions, improve behavior, and build coping
                          skills in a supportive environment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-4 mt-md-3 mt-lg-3 mt-3">
                    <div
                      className="option card border-5 border-dark  text-center p-md-4 h-100 rounded-5 p-4"
                      data-aos="fade-up"
                    >
                      <div className="option-icon">
                        <FaUserSecret size={30} />
                      </div>
                      <div className="option-text">
                        <h5 className="text-capitalize card-title fs-2">
                          Individual coaching
                        </h5>

                        <p className="card-text fs-5">
                          A one-on-one approach tailored to a person&apos;s
                          unique needs, offering personalized support to address
                          emotional, psychological, or behavioral concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-4 mt-md-3 mt-lg-3 mt-3">
                    <div
                      className="option card border-5 border-dark  text-center p-md-4 h-100 rounded-5 p-4"
                      data-aos="fade-up"
                    >
                      <div className="option-icon">
                        <MdOutlineGroupAdd size={30} />
                      </div>
                      <div className="option-text">
                        <h5 className="text-capitalize card-title fs-2">
                          Group therapy
                        </h5>

                        <p className="card-text fs-5">
                          Provides a supportive group setting where individuals
                          can share experiences, gain insights, and develop
                          social skills while working towards common goals.
                        </p>
                      </div>
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
      <section className="better bg-image container-fluid">
        <div className="circle p-5 text-center" data-aos="zoom-in">
          <h2 className="text-warning text-uppercase mb-md-3 mb-1">
            Our Value
          </h2>
          <h4 className="text-capitalize mb-md-3 mb-1 mt-md-3 mt-1">
            Bringing Therapy to <br /> the Common Man
          </h4>
          <p className="my-md-3 my-2">
            Aims to help individuals explore career options, set professional
            goals, <br /> and overcome workplace challenges, fostering personal
            growth and fulfillment.
          </p>
          <button className="bg-dark btn rounded-5 my-3 py-md-4 px-md-5">
            <a
              href="https://linktr.ee/alexandercomfort?fbclid=IwY2xjawGXHzRleHRuA2FlbQIxMAABHXZcpw-IWCNMDL5ZHdvdoEhPvKHae8LuTVyvOJItmXfR7RKVt7CinYZwkQ_aem_rxzbBEAA7gl_r03ZfQvW9g"
              target="_blank"
              className="text-white"
            >
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
              <h5 className="" data-aos="fade-up">
                We want you to get the care you deserve !!!
              </h5>
              <p className="my-3" data-aos="fade-up">
                Focusing on helping individuals address specific challenges,
                such as stress, anxiety, or relationship issues, by providing a
                safe space for open communication and guidance.
              </p>
              <ul>
                <li data-aos="fade-up">Individuals with high stress</li>
                <li data-aos="fade-up">People with Anxiety or Depression</li>
                <li data-aos="fade-up">Busy Professionals</li>
                <li data-aos="fade-up">
                  Communities in need of Emotional Support
                </li>
                <li data-aos="fade-up">Individuals Seeking Personal Growth</li>
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
      <Container className="offer-container bg-image">
        <div
          className="container-inner ms-md-5 ms-lg-5 ms-0"
          data-aos="zoom-in-down"
        >
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
              We provide a supportive group setting where individuals can share
              experiences, gain insights, and develop social skills while
              working towards common goals.
            </p>
          </div>
          <div>
            <button className="btn-white mt-3 py-md-4 px-md-5  ">
              <a
                href="mailto:mentalhealthplus24@gmail.com"
                className="text-black fw-medium"
                target="_blank"
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

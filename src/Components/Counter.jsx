import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
import { useState } from "react";
import "./button.scss";
import ScrollTrigger from "react-scroll-trigger";

function Counterr() {
  const [counterState, setCounterState] = useState(false);
  return (
    <>
      <Container className=" count_carrier p-4 text-white" fluid>
        <ScrollTrigger
          onEnter={() => setCounterState(true)}
          onExit={() => setCounterState(false)}
        >
          <Row
            data-aos="fade-up"
            className="stat p-md-5 text-md-start text-center"
          >
            <Col md={6} lg={4} sm={12} className="mt-md-3 text-center mb-5">
              <h3 className="fw-bold">
                {counterState && (
                  <CountUp start={0} end={20} duration={2.75}></CountUp>
                )}
              </h3>
              <h6>New School Programs</h6>
            </Col>
            <Col md={6} lg={4} sm={12} className="mt-md-3 text-center mb-5">
              <h3 className="fw-bold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={120} duration={2.75}></CountUp>
                )}
              </h3>
              <h6>Upcoming Education Events</h6>
            </Col>
            <Col md={6} lg={4} sm={12} className="mt-md-3 text-center mb-5">
              <h3 className="fw-bold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={950} duration={2.75}></CountUp>
                )}
              </h3>
              <h6>Online Interested Courses</h6>
            </Col>
            <Col
              md={6}
              lg={4}
              sm={12}
              className=" mt-md-3 text-center mb-5 mt-lg-5"
            >
              <h3 className="fw-bold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={30} duration={2.75}></CountUp>
                )}
              </h3>
              <h6>Expert Education Workers</h6>
            </Col>
            <Col
              md={6}
              lg={4}
              sm={12}
              className=" mt-md-3 text-center mb-5 mt-lg-5"
            >
              <h3 className="fw-bold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={1100} duration={2.75}></CountUp>
                )}
              </h3>
              <h6>Best European Curriculums</h6>
            </Col>
            <Col
              md={6}
              lg={4}
              sm={12}
              className=" mt-md-3 text-center mb-5 mt-lg-5"
            >
              <h3 className="fw-bold">
                {" "}
                {counterState && (
                  <CountUp start={0} end={1000} duration={2.75}></CountUp>
                )}
              </h3>
              <h6>Complete Education Workers</h6>
            </Col>
          </Row>
        </ScrollTrigger>
      </Container>
    </>
  );
}

export default Counterr;

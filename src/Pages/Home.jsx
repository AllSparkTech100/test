import { Container, Row, Col } from "react-bootstrap";
import "./pages.scss";
// import counseling from "../Images/counsel.jpeg";
function Home() {
  return (
    <>
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
      <Container className="middle-holder" fluid>
        <Col md={6} sm={12} lg={6}>
        <section>
          <div className="mid-intro">
            <h5>Who We Are</h5>
            <h3 className="text-capitalize">
              Mental Health is a human Right Not a Privilage
            </h3>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            debitis, illo natus quam, magnam architecto aliquid dignissimos
            suscipit dolorem, assumenda incidunt eaque iure inventore placeat
            numquam enim reprehenderit? Reiciendis soluta architecto fugiat
            culpa recusandae, numquam labore eos deserunt pariatur at.
          </p>
          {/* Different Therapies */}
          <div className="mid-options">
            <div className="option">
              <div className="option-icon"></div>
              <div className="option-text">
                <h5 className="text-capitalize">Children therapy</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  debitis iste quisquam, dolorum assumenda fuga odit eligendi
                  accusamus blanditiis impedit officiis, natus quis laboriosam
                  quasi itaque animi soluta et! Aut.
                </p>
              </div>
            </div>
            <div className="option">
              <div className="option-icon"></div>
              <div className="option-text">
                <h5 className="text-capitalize">Individual coaching</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  debitis iste quisquam, dolorum assumenda fuga odit eligendi
                  accusamus blanditiis impedit officiis, natus quis laboriosam
                  quasi itaque animi soluta et! Aut.
                </p>
              </div>
            </div>
            <div className="option">
              <div className="option-icon"></div>
              <div className="option-text">
                <h5 className="text-capitalize">Group therapy</h5>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  debitis iste quisquam, dolorum assumenda fuga odit eligendi
                  accusamus blanditiis impedit officiis, natus quis laboriosam
                  quasi itaque animi soluta et! Aut.
                </p>
              </div>
            </div>
          </div>
        </section>
        </Col>
      </Container>
    </>
  );
}

export default Home;

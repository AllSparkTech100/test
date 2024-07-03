import "./pages.scss";
import { Container, Col, Row } from "react-bootstrap";
import { FaCalendarAlt, FaPlay } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { RxDownload } from "react-icons/rx";
import Category from "./Category";
import clown from "../Images/clown.png";

function Home() {
  return (
    <>
      <main>
        <Container fluid className="bg-image hero">
          <Col md={12} lg={8} sm={12} className="mt-5 ms-lg-3">
            <div className="">
              <h5 className="text-warning fw-semibold">Movfix</h5>
              <h3 className="text-white fw-bold">
                Unlimited <span className="text-warning">Movie,</span>
                <br /> TV Shows & More
              </h3>
              <div className="under-text">
                <button className="white_btn fw-bold">PG 18</button>
                <button className="trans_btn fw-bold">HD</button>
                <p className="mt-3 fw-medium">Romance, Drama</p>
                <p className="mt-3 fw-medium d-flex align-items-center justify-content-center">
                  <FaCalendarAlt className="text-warning" size={15} /> &nbsp;
                  2024
                </p>
                <p className="mt-3 fw-medium d-flex align-items-center justify-content-center">
                  <IoMdTime className="text-warning" size={15} /> &nbsp; 120 min
                </p>
              </div>
            </div>

            <button className="trans_yel_btn mt-4  ">
              <span className="mx-2">
                <FaPlay size={15} />
              </span>
              <a className="fs-5 fw-medium" href="">
                Watch Now
              </a>
            </button>
          </Col>
        </Container>

        <Container fluid>
          <section className="mt-5 ms-lg-3">
            <h5 className="text-warning fs-6 text-uppercase fw-semibold">
              Online Streaming
            </h5>
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="fw-bold text-white fs-1">Upcoming Movies</h2>
              <Category />
            </div>

            <Row className="mt-5 content">
              <Col md={6} lg={6} sm={12} xxl={6}>
                <div className="yellow-box">
                  <div className="yellow-box-inner p-5">
                    <p className="float-end fw-bold">Only $3.99</p>

                    <img src={clown} alt="" />

                    <div>
                      <h3 className="top-text text-uppercase">
                        Hd 4k
                      </h3>
                      <h4 className="text-center fw-bold">Resolution!</h4>
                    </div>
                  </div>
                </div>
                <div className="right-box bg-warning">
                  <h4>
                    <a href="" className="text-uppercase text-dark fs-6">
                      download &nbsp;{" "}
                      <span>
                        <RxDownload
                          style={{ transform: "rotate(270deg)" }}
                          size={20}
                        />
                      </span>
                    </a>
                  </h4>
                </div>
              </Col>
              <Col md={6} lg={6} sm={12} xxl={6}></Col>
            </Row>
          </section>
        </Container>
      </main>
    </>
  );
}

export default Home;

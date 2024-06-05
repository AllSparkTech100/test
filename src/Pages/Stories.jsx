import "./pages.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import bar2 from "../Photos/bar-2.jpg";
import bar1 from "../Photos/wineee.jpg";
import wine from "../Photos/wines.jpg";
import { MdMarkUnreadChatAlt } from "react-icons/md";
// import Paginator from "../Components/Pagination";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Stories() {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      once: false,
      startEvent: "DOMContentLoaded",
    });
  });
  return (
    <>
      <main className="">
        <div className="bg-image story_intro">
          <div className="about_text">
            <h3
              className="text-white text-center"
              data-aos="fade-up"
              data-aos-offset="0"
            >
              Blog
            </h3>
            <p className="text-center" data-aos="fade-up" data-aos-offset="0">
              <a href="/" className="text-white fw-normal">
                Home &gt;
              </a>
            </p>
          </div>
        </div>
        {/* Blog */}
        <Container fluid>
          <div className="blog_page">
            <Container>
              <Row>
                <Col
                  data-aos="fade-up"
                  data-aos-duration="300"
                  md={4}
                  sm={12}
                  className="mt-5"
                >
                  <Card className="shadow-none border-0">
                    <Card.Img
                      variant="top"
                      className="img fluid h-50"
                      src={wine}
                    />
                    <Card.Body>
                      <Card.Text style={{ color: "#787878" }}>
                        Sept. 06 2019 Admin
                      </Card.Text>
                      <Card.Title>Taste the Delicious foods in Asia</Card.Title>
                    </Card.Body>
                    <Card.Footer className="border-0">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                      >
                        <small className="text-muted d-flex align-items-center justify-content-between fs-6">
                          Read More{" "}
                          <span>
                            <MdMarkUnreadChatAlt size={18} />
                          </span>
                        </small>
                      </a>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col
                  data-aos="fade-up"
                  data-aos-duration="500"
                  md={4}
                  sm={12}
                  className="mt-5"
                >
                  <Card className="shadow-none border-0">
                    <Card.Img
                      variant="top"
                      className="h-auto img-fluid"
                      src={bar2}
                    />
                    <Card.Body>
                      <Card.Text style={{ color: "#787878" }}>
                        Sept. 06 2019 Admin
                      </Card.Text>
                      <Card.Title>Taste the Delicious foods in Asia</Card.Title>
                    </Card.Body>
                    <Card.Footer className="border-0">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                      >
                        <small className="text-muted d-flex align-items-center justify-content-between fs-6">
                          Read More{" "}
                          <span>
                            <MdMarkUnreadChatAlt size={18} />
                          </span>
                        </small>
                      </a>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col
                  data-aos="fade-up"
                  data-aos-duration="800"
                  md={4}
                  sm={12}
                  className="mt-5"
                >
                  <Card className="shadow-none border-0 h-100">
                    <Card.Img
                      variant="top"
                      className="h-75 img fluid"
                      src={bar1}
                    />
                    <Card.Body>
                      <Card.Text style={{ color: "#787878" }}>
                        Sept. 06 2019 Admin
                      </Card.Text>
                      <Card.Title>Taste the Delicious foods in Asia</Card.Title>
                    </Card.Body>
                    <Card.Footer className="border-0">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                      >
                        <small className="text-muted d-flex align-items-center justify-content-between fs-6">
                          Read More{" "}
                          <span>
                            <MdMarkUnreadChatAlt size={18} />
                          </span>
                        </small>
                      </a>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col
                  data-aos="fade-up"
                  data-aos-duration="300"
                  md={4}
                  sm={12}
                  className="mt-5"
                >
                  <Card className="shadow-none border-0">
                    <Card.Img
                      variant="top"
                      className="img fluid h-50"
                      src="https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/dqneuviy/1a60a232-f1af-4242-a956-a792ab151689.jpg"
                    />
                    <Card.Body>
                      <Card.Text style={{ color: "#787878" }}>
                        Sept. 06 2019 Admin
                      </Card.Text>
                      <Card.Title>Taste the Delicious foods in Asia</Card.Title>
                    </Card.Body>
                    <Card.Footer className="border-0">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                      >
                        <small className="text-muted d-flex align-items-center justify-content-between fs-6">
                          Read More{" "}
                          <span>
                            <MdMarkUnreadChatAlt size={18} />
                          </span>
                        </small>
                      </a>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col
                  data-aos="fade-up"
                  data-aos-duration="500"
                  md={4}
                  sm={12}
                  className="mt-5"
                >
                  <Card className="shadow-none border-0">
                    <Card.Img
                      variant="top"
                      className="h-auto img-fluid"
                      src="https://img.freepik.com/premium-photo/young-beautiful-woman-drinking-wine-restaurant_109285-6235.jpg"
                    />
                    <Card.Body>
                      <Card.Text style={{ color: "#787878" }}>
                        Sept. 06 2019 Admin
                      </Card.Text>
                      <Card.Title>Taste the Delicious foods in Asia</Card.Title>
                    </Card.Body>
                    <Card.Footer className="border-0">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                      >
                        <small className="text-muted d-flex align-items-center justify-content-between fs-6">
                          Read More{" "}
                          <span>
                            <MdMarkUnreadChatAlt size={18} />
                          </span>
                        </small>
                      </a>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col
                  data-aos="fade-up"
                  data-aos-duration="800"
                  md={4}
                  sm={12}
                  className="mt-5"
                >
                  <Card className="shadow-none border-0 h-100">
                    <Card.Img
                      variant="top"
                      className="h-75 img fluid"
                      src="https://thumbs.dreamstime.com/b/beautiful-modern-wine-cellar-big-house-141570323.jpg"
                    />
                    <Card.Body>
                      <Card.Text style={{ color: "#787878" }}>
                        Sept. 06 2019 Admin
                      </Card.Text>
                      <Card.Title>Taste the Delicious wines in Asia</Card.Title>
                    </Card.Body>
                    <Card.Footer className="border-0">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none"
                      >
                        <small className="text-muted d-flex align-items-center justify-content-between fs-6">
                          Read More{" "}
                          <span>
                            <MdMarkUnreadChatAlt size={18} />
                          </span>
                        </small>
                      </a>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
        {/* <div className="align-items-center d-flex justify-contents-center">
          <Paginator />
        </div> */}
      </main>
    </>
  );
}

export default Stories;

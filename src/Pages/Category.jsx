import { Col, Row, Container, Button } from "react-bootstrap";
import "./pages.scss";
import { Link } from "react-router-dom";

function Category() {
  return (
    <Container className="mb-5">
      <div className="navig">
        <Row>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <Link to={"/breakfast"} className="">
              <Button className="menu_selector w-100 shadow-none border-0 rounded-0">
                <h4>Breakfast</h4>
              </Button>
            </Link>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <Link to={"/lunch"}>
              <Button className="menu_selector w-100  shadow-none border-0 rounded-0 ">
                <h4>Lunch</h4>
              </Button>
            </Link>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <Link to={"/dinner"}>
              <Button className="menu_selector w-100  shadow-none border-0 rounded-0 ">
                <h4>Dinner</h4>
              </Button>
            </Link>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <Link to={"/drinks"}>
              <Button className="menu_selector w-100  shadow-none border-0 rounded-0 ">
                <h4>Drinks</h4>
              </Button>
            </Link>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <Link to={"/desserts"}>
              <Button className="menu_selector w-100  shadow-none border-0 rounded-0 ">
                <h4>Desserts</h4>
              </Button>
            </Link>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <Link to={"/wines"}>
              <Button className="menu_selector w-100  shadow-none border-0 rounded-0 ">
                <h4>Wines</h4>
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Category;

import { Col, Row, Container } from "react-bootstrap";
import "./pages.scss";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <Container className="mb-5">
      <div className="navig">
        <Row>
          <Col md={2} sm={12} className="mb-3 shadow-none mb-md-0">
            <NavLink
              to="/breakfast"
              className="menu_selector w-100 shadow-none border-0 rounded-0"
            >
              <h4>Breakfast</h4>
            </NavLink>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <NavLink
              to="/lunch"
              className="menu_selector w-100 shadow-none border-0 rounded-0"
            >
              <h4>Lunch</h4>
            </NavLink>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <NavLink
              to="/dinner"
              className="menu_selector w-100 shadow-none border-0 rounded-0"
            >
              <h4>Dinner</h4>
            </NavLink>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <NavLink
              to="/drinks"
              className="menu_selector w-100 shadow-none border-0 rounded-0"
            >
              <h4>Drinks</h4>
            </NavLink>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <NavLink
              to="/desserts"
              className="menu_selector w-100 shadow-none border-0 rounded-0"
            >
              <h4>Desserts</h4>
            </NavLink>
          </Col>
          <Col md={2} sm={12} className="mb-3 mb-md-0">
            <NavLink
              to="/wines"
              className="menu_selector w-100 shadow-none border-0 rounded-0"
            >
              <h4>Wines</h4>
            </NavLink>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Category;

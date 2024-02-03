import "./button.scss";
import { Col, Row, Form, Button } from "react-bootstrap";

function FormComp() {
  return (
    <>
      <div className="form_carrier">
        <div className="form-intro">
          <h4 className="fw-medium">Book a Table</h4>
          <div className="intro_inner">
            <h5 className="fw-bold">Make a Reservation</h5>
          </div>
        </div>
        <div className="main_form">
          <Form>
            {/* Name and Email */}
            <Row className="mb-3">
              <Form.Group as={Col} md={6} sm={12} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  className="shadow-none rounded-0 p-3"
                  placeholder="Name"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  className="shadow-none rounded-0 p-3"
                  placeholder="Email" required
                />
              </Form.Group>
            </Row>
            {/* Phone and Date */}
            <Row className="mb-3">
              <Form.Group as={Col} sm={12} md={6} controlId="formGridPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="tel"
                  className="shadow-none rounded-0 p-3"
                  placeholder="Phone" maxLength={20}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  className="shadow-none rounded-0 p-3"
                />
              </Form.Group>
            </Row>

            {/* Time and Persons */}
            <Row className="mb-3">
              <Form.Group as={Col} md={6} sm={12}controlId="formGridTime">
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type="time"
                  className="shadow-none rounded-0 p-3"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Person (s)</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  className="shadow-none rounded-0 p-3"
                >
                  <option>Choose...</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <div className="form_btn">
              <Button className="btn border-0 btn-sub shadow-none" type="submit">
                Make a Reservation
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default FormComp;

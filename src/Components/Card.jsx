/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import "./button.scss";

function CardComp(props) {
  return (
    <div>
      <Card className="border-0 text-center">
        <Card.Body>
          <Card.Title className="text-danger d-flex justify-content-center fs-1">{props.icon}</Card.Title>
          <Card.Subtitle className="mb-2 text-dark fs-1">
            <h6 className="fs-3">{props.subtitle}</h6>
          </Card.Subtitle>
          <Card.Text>
            <p className="fs-5">{props.text}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComp;

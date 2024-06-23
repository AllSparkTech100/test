/* eslint-disable react/prop-types */
import { Card } from "react-bootstrap";
import "./button.scss";
import { FaTwitter, FaGooglePlusG, FaFacebookF } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function TeachersCard(props) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease",
      once: false,
    });
  });
  return (
    <>
      <Card
        data-aos="fade-up"
        data-aos-duration="500"
        className="teaching_staff w-auto"
        rounded-4
      >
        <Card.Img variant="top" src={props.imgUrl} className="h-100" />
        <Card.Body>
          <Card.Title className="fw-bold text-center mt-2 fs-6">
            {props.name}
          </Card.Title>
          <Card.Text
            style={{ color: "#787878" }}
            className="text-center fw-normal"
          >
            {props.text}
          </Card.Text>
          <div className="text-center social_carrier mt-3">
            <div className="social">
              <FaTwitter size={20} />
            </div>
            &nbsp;{" "}
            <div className="social">
              <FaFacebookF size={20} />
            </div>{" "}
            &nbsp;
            <div className="social">
              <FaGooglePlusG size={20} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default TeachersCard;

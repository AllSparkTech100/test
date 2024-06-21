/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import "./button.scss";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowRoundForward } from "react-icons/io";

function SchoolEvent(props) {
  return (
    <div>
      <Col className="my-2 mx-md-auto mx-lg-auto" md={8} lg={6} sm={12}>
        <div
          className="event-carrier"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="event-inner">
            <div className="event-img d-none d-lg-block d-md-block">
              <img
                src={props.img}
                className="d-none rounded object-fit-md-cover object-fit-lg-cover d-lg-block d-md-block"
                alt={props.title}
              />
            </div>
            <div className="right_texts p-2 mt-1">
              <div className="fs-4 title fw-medium mb-2">{props.title}</div>
              <p className="d-flex align-items-center">
                <span className="me-3">
                  <FaLocationDot size={20} />
                </span>{" "}
                {props.venue}
              </p>
              <div className="little_line rounded-5"></div>
              <p className="mt-4">{props.text}</p>
              <p>
                <span className="fw-medium">{props.date}</span> -{" "}
                <span className="fw-medium">{props.time}</span>
              </p>
              <div className="float-end endd fw-medium">
                <p>
                  <a href="">
                    View Details &nbsp;
                    <span>
                      <IoMdArrowRoundForward size={24} />
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
}

export default SchoolEvent;

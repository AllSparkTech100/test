import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import "./components.scss";

function Counter() {
  const [counterState, setCounterState] = useState(false);
  return (
    <div>
      {" "}
      <ScrollTrigger
        onEnter={() => setCounterState(true)}
        onExit={() => setCounterState(false)}
      >
        <div className="counter mt-1 p-lg-3 p-md-3 p-sm-0">
          <div className="me-md-3 me-lg-3 m-1">
            <h3 className="">
              {counterState && (
                <CountUp start={0} end={25} duration={2.75}></CountUp>
              )}{" "}
              +
            </h3>
            <p>Years Experience</p>
          </div>
          <div className="me-md-3 me-lg-3 m-1">
            <h3 className="">
              {counterState && (
                <CountUp start={0} end={7.5} duration={2.75}></CountUp>
              )}
              k+
            </h3>
            <p>Active Members</p>
          </div>
          <div className="ms-md-3 ms-lg-3 m-1">
            <h3 className="">
              {" "}
              {counterState && (
                <CountUp start={0} end={99} duration={2.75}></CountUp>
              )}
              %
            </h3>
            <p>Satisfied Clients</p>
          </div>
        </div>
      </ScrollTrigger>
    </div>
  );
}

export default Counter;

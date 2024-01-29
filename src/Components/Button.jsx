/* eslint-disable react/prop-types */
import "./button.scss";

function ButtonComp (props){
  return (
    <div>
      <div className="btn">{props.text}</div>
    </div>
  );
}

export default ButtonComp;

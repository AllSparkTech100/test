/* eslint-disable react/prop-types */
import './components.scss';
function ServiceCard(props){
    return(
        <>
        <h3>{props.title}</h3>
                <div className="service-icon">{props.icon}</div>
                <div>
                {props.text}
                </div>
                <button>{props.linkText}</button>
        </>
    )
}

export default ServiceCard;
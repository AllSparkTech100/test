// import styled from "styled-components";

// eslint-disable-next-line react/prop-types
function CircleImage({ imageUrl }) {
  const circleStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    overflow: "hidden",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "50%",
  };

  return (
      <div style={circleStyle}>
        <img src={imageUrl} alt="Profile" style={imageStyle} />
      </div>
  );
}

export default CircleImage;

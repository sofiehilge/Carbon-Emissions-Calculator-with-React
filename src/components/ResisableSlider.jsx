import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
`;

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}</StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    ${(props) => getColor(props.index, 0)} 0%,
    ${(props) => getColor(props.index, 50)} 50%,
    ${(props) => getColor(props.index, 100)} 100%
  );
  border-radius: 999px;
`;

const getColor = (index, value) => {
  // Define color stops for green, yellow, orange, and red
  const colors = ["#0f0", "#ff0", "#ffa500", "#f00"];
  
  // Determine the color based on the value and the index of the stop
  const colorIndex = index === 2 ? 3 : index === 1 ? 2 : 0;
  
  // Interpolate between colors based on the value
  return colors[colorIndex];
};

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const ResisableSlider = ({ cleanerThan }) => {
  return (
    <StyledSlider
      defaultValue={100-cleanerThan}
      disabled={true}
      /* onChange={(value)} */
      renderTrack={Track}
      renderThumb={Thumb}
    />
  );
};

export default ResisableSlider;

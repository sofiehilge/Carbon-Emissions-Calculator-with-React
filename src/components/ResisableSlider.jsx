import React from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 25px;
  margin-bottom: 20px;
`;

const StyledThumb = styled.div`
  width: 50px;
  height: 25px;
  background-color: white;
  text-align: center;
  border: solid 2px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: default;
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>{state.valueNow}%</StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  border: solid white;
  border-radius: 100px;
  background: url(https://library.nomadadigital.eu/wp-content/uploads/2023/10/sky-yodo-final-scaled.jpg);
`;

const Track = (props) => <StyledTrack {...props} index={props.index} />;

const Mark = styled.div`
  height: 5px;
  width: 1px;
  background-color: white;
  position: absolute;
  top: 5px;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
`;

const Marks = ({ children, ...props }) => (
  <div {...props}>
    {[...Array(11).keys()].map((i) => (
      <Mark key={i} style={{ right: `${i * (100 / 10)}%` }} />
    ))}
    {children}
  </div>
);

const ResizableSlider = ({ cleanerThan }) => {
  return (
    <div>
      <StyledSlider
        defaultValue={100 - cleanerThan}
        disabled={true}
        renderTrack={Track}
        renderThumb={Thumb}
      />
      <Marks />
    </div>
  );
};

export default ResizableSlider;

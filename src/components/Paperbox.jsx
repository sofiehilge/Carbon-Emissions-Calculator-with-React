import React from "react";
import styled from "styled-components";

const PaperBox = styled.div`
  padding: 10px;
  background-color: orange;
  border-radius: 10px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export default PaperBox;

import React from "react";
import styled from "styled-components";
import site from "../entities";

const Paperbox = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 0.25em;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TextHighlight = styled.span`
  padding: 3px;
  border-radius: 5px;
  display: inline;
`;

const TextHighLightSuccess = styled(TextHighlight)`
  background-color: #4caf50;
  color: white;
`;

const TextHighlightFail = styled(TextHighlight)`
  background-color: #f44336;
  color: white;
`;

const Results = ({ site }) => {
  return (
    <Paperbox>
      <div style={{ marginBottom: "16px" }}>
        <h5 style={{ textAlign: "center", fontWeight: "bold" }}>
          Carbon Result
        </h5>
        <p>
          {site.url.length > 30 ? `${site.url.substring(0, 30)}..` : site.url}
        </p>
      </div>
      <p>
        This website is{" "}
        {site.cleanerThan >= 50 ? (
          <TextHighLightSuccess>
            cleaner than {site.cleanerThan}%
          </TextHighLightSuccess>
        ) : (
          <TextHighlightFail>
            dirtier than {100 - site.cleanerThan}%
          </TextHighlightFail>
        )}{" "}
        of web pages tested.
      </p>
      <br />
      <p>
        {site.co2 < 0.5 ? (
          <TextHighLightSuccess>
            {site.co2.toFixed(2)}g of CO2
          </TextHighLightSuccess>
        ) : (
          <TextHighlightFail>{site.co2.toFixed(2)}g of CO2</TextHighlightFail>
        )}{" "}
        is produced every time someone visits this web page.
      </p>
    </Paperbox>
  );
};

export default Results;

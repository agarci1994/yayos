import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";

const Text = styled.text`
  color: rgb(49, 49, 49);
  text-align: center;
  font-size: 1.1em;
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  list-style: none;
  width: 100%;
`;

const CardMain = props => {
  console.log(props);
  return (
    <>
          {props.info && props.info.map((elm, idx) => (
              <Text key={idx}>
                  {elm.description} | {elm.date} <br />
              </Text>
          ))}
    </>
  );
};

export default CardMain;

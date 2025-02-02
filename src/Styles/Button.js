import styled from "styled-components";
import { BluePrimaryColor } from "./Colors";
import PropTypes from "prop-types";

export const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  background-color: ${(props) =>
    props.disabled ? "#e5e5e5" : props.primary ? BluePrimaryColor : "white"};
  color: ${(props) =>
    props.disabled ? "white" : props.primary ? "white" : BluePrimaryColor};
  border: ${(props) =>
    props.primary || props.disabled
      ? "2px solid transparent"
      : `2px solid ${BluePrimaryColor}`};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  width: fit-content;
  transition: 0.3s ease-out;
  margin: 8px 6px;

  &:hover:enabled {
    background-color: ${(props) =>
      props.primary ? "white" : BluePrimaryColor};
    color: ${(props) => (props.primary ? BluePrimaryColor : "white")};
    border: ${(props) =>
      props.primary
        ? `2px solid ${BluePrimaryColor}`
        : "2px solid transparent"};
  }
`;

Button.propTypes = {
  primary: PropTypes.bool.isRequired,
};

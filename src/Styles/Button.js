import styled from "styled-components";
import { BluePrimaryColor } from "./Colors";

export const Button = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  background-color: ${(props) => (props.primary ? BluePrimaryColor : "white")};
  color: ${(props) => (props.primary ? "white" : BluePrimaryColor)};
  border: ${(props) =>
    props.primary ? "none" : `2px solid ${BluePrimaryColor}`};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  width: fit-content;

  &:hover {
  }
`;

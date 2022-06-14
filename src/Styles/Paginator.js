import styled from "styled-components";
import { BluePrimaryColor } from "./Colors";

export const StyledPaginatorContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const StyledPaginatorButton = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.selected ? "white" : BluePrimaryColor)};
  padding: 0.4rem 0.8rem;
  border-radius: 50%;
  margin-right: 8px;
  border: 2px solid ${BluePrimaryColor};
  background-color: ${(props) => (props.selected ? BluePrimaryColor : "white")};
`;

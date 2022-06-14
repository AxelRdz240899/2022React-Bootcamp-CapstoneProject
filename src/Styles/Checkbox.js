import styled from "styled-components";
import { BluePrimaryColor } from "Styles/Colors";

export const StyledCheckBox = styled.div`
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
  border: 2px solid;
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? BluePrimaryColor : "white")};
  font-size: 1.5rem;
  border-color: ${BluePrimaryColor};
`;

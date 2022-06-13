import styled from "styled-components";
import { BluePrimaryColor } from "Styles/Colors";


export const StyledCheckBox = styled.input`
  fill: ${(props) => (props.checked ? BluePrimaryColor : "white")};
  font-size: 1.5rem;
  border-color: ${(props) => (props.checked ? BluePrimaryColor : "#e5e5e")};
`;

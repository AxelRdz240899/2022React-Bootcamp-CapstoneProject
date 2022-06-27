import styled from "styled-components";
import { CategoryColors } from "utils/CategoryColors";
export const StyledCheckBox = styled.div`
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
  border: 2px solid;
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? CategoryColors[props.categoryId] : "white")};
  font-size: 1.5rem;
  border-color: ${(props) => CategoryColors[props.categoryId]};
`;

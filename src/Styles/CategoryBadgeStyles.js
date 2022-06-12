import styled from "styled-components";

export const StyledCategoryBadge = styled.span`
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  padding: 5px 10px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 16px;
  &::first-letter {
    text-transform: capitalize;
  }
`;

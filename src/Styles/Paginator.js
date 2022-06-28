import styled from "styled-components";
import { BluePrimaryColor } from "./Colors";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export const StyledPaginatorContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const PaginatorText = styled.p`
  font-size: 1.3rem;
  color: #03396c;
  font-weight: 500;
`;

export const PaginatorSelectedText = styled.span`
  font-weight: 700;
  font-size: 1.4rem;
`;
export const PaginatorLeftArrow = styled(MdArrowBackIos)`
  font-size: 3rem;
  color: ${BluePrimaryColor};
  cursor: pointer;
`;

export const PaginatorRightArrow = styled(MdArrowForwardIos)`
  font-size: 3rem;
  color: ${BluePrimaryColor};
  cursor: pointer;
`;

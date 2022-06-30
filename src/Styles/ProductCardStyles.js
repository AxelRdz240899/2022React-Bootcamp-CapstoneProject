import styled from "styled-components";
import { device } from "utils/viewports";
import { CategoryColors } from "utils/CategoryColors";
import { Link } from "react-router-dom";
import { Button } from "Styles/Button";
export const StyledCard = styled(Link)`
  border: ${(props) => (props.selected ? "2px solid" : "none")};
  border-color: ${(props) =>
    props.selected ? CategoryColors[props.categoryid] : "none"};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 12px 25px;
  cursor: pointer;
  text-decoration: none;
`;

export const StyledImgContainer = styled.div`
  background-color: #dfedf4;
`;
export const StyledProductImage = styled.img`
  height: 200px;
  width: auto;
  text-align: center;
`;

export const ProductName = styled.p`
  color: #2389da;
  font-size: 23px;
  font-weight: 700;
  text-align: center;
  margin: 0.5rem 0;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  color: #6e2dfb;
  text-align: center;
  margin: 0.5rem 0;
  ${device.mobile} {
    font-size: 26px;
  }

  ${device.tablet} {
    font-size: 23px;
  }

  ${device.mobileL} {
    font-size: 24px;
  }
`;

export const AddToCartButton = styled(Button)`
  font-size: 1.1rem;
  border-radius: 8px;
`;

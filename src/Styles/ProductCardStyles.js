import styled from "styled-components";
import { device } from "../utils/viewports";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 12px;
`;

export const StyledProductImage = styled.img`
  height: auto;
  text-align: center;
  ${device.mobile} {
    width: 90%;
  }

  ${device.tablet} {
    width: 80%;
  }

  ${device.laptop} {
    width: 60%;
  }

  ${device.desktop} {
    width: 55%;
    height: 40%;
  }
`;

export const ProductName = styled.p`
  color: #57c0ff;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  margin: 0;
`;

export const ProductDescription = styled.p`
  font-size: 17px;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  font-size: 26px;
  color: #6e2dfb;
  text-align: center;
`;

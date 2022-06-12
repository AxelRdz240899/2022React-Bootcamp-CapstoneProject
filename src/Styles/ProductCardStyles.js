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
  cursor: pointer;
`;

export const StyledProductImage = styled.img`
  height: auto;
  text-align: center;
  ${device.mobile} {
    width: 60%;
  }

  ${device.mobileL} {
    width: 50%;
  }

  ${device.tablet} {
    width: 80%;
  }

  ${device.laptop} {
    width: 60%;
  }

  ${device.desktop} {
    width: 80%;
  }
`;

export const ProductName = styled.p`
  color: #57c0ff;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin: 0;
`;

export const ProductDescription = styled.p`
  text-align: center;

  ${device.mobile} {
    font-size: 18px;
  }
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  color: #6e2dfb;
  text-align: center;

  ${device.mobile} {
    font-size: 32px;
  }

  ${device.mobileL} {
    font-size: 28px;
  }
`;

export const PriceContainer = styled.div`
  align-self: flex-end;
  border-top: 2px solid #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${device.mobile} {
    height: 10%;
  }
`;

export const ProductInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  ${device.mobileL} {
    height: 90%;
  }
`;

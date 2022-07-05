import styled from "styled-components";
import { device } from "utils/viewports";
import { MdDelete } from "react-icons/md";

export const StyledProductCard = styled.div`
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px;
  flex-wrap: wrap;

  ${device.mobile} {
    justify-content: space-evenly;
  }
`;

export const ImageContainer = styled.div`
  ${device.mobile} {
    margin-bottom: 15px;
  }
  ${device.laptop} {
    margin-bottom: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledImage = styled.img`
  display: flex;
  align-items: center;
  height: 200px;
  width: auto;
`;

export const ProductInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 15px;
  justify-content: center;
  align-items: center;
  ${device.mobile} {
    width: 100%;
  }
  ${device.tablet} {
    width: 25%;
  }
`;

export const NameLabel = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: #03396c;

  ${device.desktop} {
    font-size: 1.5rem;
  }
  ${device.tablet} {
    font-size: 1.3rem;
  }
`;

export const PriceLabel = styled.label`
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  margin-top: 10px;
`;

export const PriceSpan = styled.span`
  font-weight: 600;
  color: #007bff;
`;

export const QtyLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
`;

export const InputContainer = styled.div`
  ${device.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px 0;
  }

  ${device.tablet} {
    width: auto;
  }
`;
export const TotalTitle = styled.label`
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
`;
export const TotalLabel = styled.label`
  font-size: 1.7rem;
  color: #28a745;
  font-weight: 600;
  text-align: center;
`;

export const IconContainer = styled.div`
  ${device.mobile} {
    margin: 15px 0;
  }
  ${device.laptop} {
    margin: 0;
  }
`;

export const DeleteIcon = styled(MdDelete)`
  font-size: 3rem;
  color: #dc3545;
`;

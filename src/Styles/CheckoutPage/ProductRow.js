import styled from "styled-components";
import { BluePrimaryColor } from "Styles/Colors";
import { device } from "utils/viewports";

export const StyledProductCard = styled.div`
  align-self: center;
  width: 80%;
  ${device.laptop} {
    width: 50%;
  }
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 10px 15px -3px rgb(0 0 0 / 10%);
  background-color: white;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const NameLabel = styled.label`
  font-size: 1.2rem;
  color: ${BluePrimaryColor};
  font-weight: 600;
  margin-right: 15px;
  text-align: center;
`;
export const NumberLabel = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  margin-right: 15px;
`;
export const SubTotalLabel = styled.label`
  font-size: 1.4rem;
  color: #28a745;
  font-weight: 600;
  text-align: center;
`;

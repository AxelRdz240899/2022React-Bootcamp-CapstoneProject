import styled from "styled-components";
import { device } from "utils/viewports";
import { BluePrimaryColor } from "Styles/Colors";
import { Button } from "Styles/Button";

export const ProductInformationContainer = styled.div`
  ${device.laptop} {
    width: 50%;
  }
`;

export const InformationCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  display: block;
  text-align: center;
`;

export const ProductName = styled(Label)`
  display: block;
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  color: #03396c;
`;

export const SectionTitle = styled.p`
  margin-top: 9px;
  font-size: ${(props) => (props.size ? props.size + "rem" : "1.4rem")};
  font-weight: 600;
  text-align: ${(props) => props.align};
  margin-bottom: 0.8rem;
`;

export const ProductDescription = styled(Label)`
  text-align: start;
  font-size: 1.1rem;
`;

export const ProductSKU = styled(Label)`
  font-weight: 600;
  font-size: 1.1rem;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
export const Tag = styled.label`
  height: 22px;
  margin-right: 8px;
  border-radius: 16px;
  background-color: ${BluePrimaryColor};
  color: white;
  padding: 8px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const AddToCartButton = styled(Button)`
  align-self: center;
  font-weight: 600;
  font-size: 1.7rem;
  padding: 15px 30px;
`;

export const Price = styled.label`
  font-weight: 700;
  color: #6e2dfb;
  text-align: center;
  margin: 0.5rem 0;
  font-size: 2.3rem;
`;

export const Stock = styled.label`
  color: ${(props) => (props.empty ? "#dc3545" : "#007600")};
  font-size: 1.5rem;
  font-weight: 700;
`;

export const SpecTitle = styled.span`
  font-weight: 600;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const QuantityInput = styled.input`
  margin-left: 10px;
  border-radius: 12px;
  font-size: 1.3rem;
  font-weight: 500;
  border: 2px solid ${(props) => (props.disabled ? "#e5e5e5" : "#158cd2")};
  height: 30px;
  width: 50px;
  &:focus {
    outline: 0;
    transition: border-color 0.6s ease-in-out;
    border-color: #0060b7;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

export const Separator = styled.div`
  height: 4px;
  margin: 10px;
  background-color: #e5e5e5;
`;

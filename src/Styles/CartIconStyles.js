import styled from "styled-components";
import { MdShoppingCart } from "react-icons/md";
import { device } from "utils/viewports";
import { BluePrimaryColor } from "./Colors";

export const Badge = styled.span`
  cursor: pointer;
  top: -23%;
  left: 50%;
  position: absolute;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 50%;
  background-color: ${(props) => (props.empty ? "#343a40" : BluePrimaryColor)};
  color: white;
`;

export const StyledCartIcon = styled(MdShoppingCart)`
  display: block;
  font-size: 2.3rem;
  color: gray;
  cursor: pointer;
  ${device.mobileL} {
    font-size: 2.6rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

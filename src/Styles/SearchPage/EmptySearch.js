import styled from "styled-components";
import { MdSearchOff } from "react-icons/md";
import { device } from "utils/viewports";
import { BluePrimaryColor } from "Styles/Colors";
export const Container = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  font-size: 2rem;
  ${device.laptop} {
    font-size: 3rem;
  }
  font-weight: 500;
  text-align: center;
`;

export const ComplementarySearch = styled.label`
  font-size: 1.4rem;
  color: ${BluePrimaryColor};
  font-weight: 500;
  ${device.laptop} {
    font-size: 2rem;
  }
`;

export const Icon = styled(MdSearchOff)`
  font-size: 10rem;
  color: #03396c;
`;

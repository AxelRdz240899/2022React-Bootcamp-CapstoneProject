import styled from "styled-components";
import { BluePrimaryColor } from "Styles/Colors";

export const PageContainer = styled.section`
  height: 100%;
  padding: 20px;
  background-color: #f2f8ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const FormContainer = styled.form`
  width: 80%;
  align-self: center;
  text-align: center;
`;

export const SummaryTable = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  margin: 5px;
  border-radius: 8px;
  padding: 5px;
  font-size: 1.2rem;
  border: 2px solid #e5e5e5;
  transition: 0.2s border-color ease-in-out;
  &:focus {
    outline: none !important;
    border-color: ${BluePrimaryColor};
  }
`;

export const TextArea = styled.textarea`
  margin: 5px;
  width: 100%;
  font-size: 1.2rem;
  padding: 5px;
  border-radius: 8px;
  border: 2px solid #e5e5e5;
  transition: 0.2s border-color ease-in-out;
  &:focus {
    outline: none !important;
    border-color: ${BluePrimaryColor};
  }
`;

export const ButtonsContainer = styled.div`
  text-align: center;
`;

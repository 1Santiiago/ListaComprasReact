import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    justify-content: center;
    width: 50%;
    
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
   
`

export const Input = styled.input`
    padding-left: 5px;
    font-size: small;
    height: 2.3rem;
    border-radius: 13px;
    border: 0;
    background-color: #FF9975;


    &::placeholder {
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
   }
`

export const ButtonStyled = styled.button`
  background-color: #ff3376;
  color: #ffffff; /* Cor do texto */
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

import styled from 'styled-components';

export const Input = styled.input.attrs({
  type: 'text'
})`
  height: 60px;
  padding: 10px 15px;
  border-radius: 10px;
  border-color: lightgray;
  border-style: solid;
  border-width: thin;
  box-sizing: border-box;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 20px;
    margin: 5px 18px;
  }

  @media (min-width: 768.2px) {
    font-size: 25px;
    margin: 15px 5px;
  }
`;
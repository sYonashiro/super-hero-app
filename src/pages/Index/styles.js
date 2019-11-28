import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 768px) {
    padding: 15px 0;
  }

  @media (min-width: 768.2px) {
    padding: 30px 150px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled.input.attrs({
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

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }

  @media (min-width: 768.2px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  border-color: lightgray;
  border-style: solid;
  border-radius: 10px;
  border-width: thin;
  padding: 10px;
  display: flex;
  background-color: white;

  h2, h4, h5 { margin: 10px; }

  h4 { color: gray; }

  h5 { color: #008fbb}

  @media (max-width: 768px) {
    margin: 5px;
    width: 90%;

    img {
      height: 120px;
      width: 80px;
    }
  }
  
  @media (min-width: 768.2px) {
    margin: 5px;
    width: 300px;
    flex-direction: row;
    flex-grow: 1;

    img {
      height: 240px;
      width: 160px;
    }
  }
`
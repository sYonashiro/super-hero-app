import styled from 'styled-components';

export const Card = styled.div`
  border-color: lightgray;
  border-style: solid;
  border-radius: 10px;
  border-width: thin;
  display: flex;
  background-color: white;

  h2, h4, h5 { margin: 10px; }

  h4 { color: gray; }

  h5 { color: #008fbb}

  img {
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin: 5px;
    width: 90%;

    img {
      height: 120px;
      width: 80px;
    }

    h2 { font-size: 18px; }
    h4 { font-size: 14px; }
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
    
    h2 { font-size: 25px; }
    h4 { font-size: 16px; }
  }
`
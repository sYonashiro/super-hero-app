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
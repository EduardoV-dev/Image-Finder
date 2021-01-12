import styled, { css } from 'styled-components';

export const Container = styled.form`
  max-width: 56rem;
  background-color: ${({ theme }) => theme.primaryDarken};
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }

  ${({ imgView }) => imgView && css`
    width: 100%;
    max-width: 75rem;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: transparent;

    @media screen and (min-width: 576px) {
      justify-content: flex-start
    }

    @media screen and (min-width: 768px) {
      padding: 0;
    }
  `};
`;
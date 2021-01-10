import styled from 'styled-components';

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
`;
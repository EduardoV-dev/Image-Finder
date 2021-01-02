import styled from 'styled-components';

export const ImagesContainer = styled.section`
  width: 90%;
  max-width: 75rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.primaryDarken};
  margin: 3rem auto;
  border-radius: 10px;

  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
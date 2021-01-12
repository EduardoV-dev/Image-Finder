import styled from 'styled-components'

export const Aside = styled.aside`
  max-height: 22rem;
  padding: 2rem;
  background-color: ${({ theme }) => theme.primaryDarken};
  border-radius: 10px;
  grid-area: ImageDetails;
  margin-bottom: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (min-width: 576px) {
    max-width: 25rem;
  }
`;
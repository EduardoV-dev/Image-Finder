import styled from 'styled-components';

export const Control = styled.div`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 65%;

    &:last-of-type {
      flex: 0 0 30%;
      margin-top: 0.6rem;
    }
  }
`;
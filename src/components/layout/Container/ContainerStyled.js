import styled, { css } from 'styled-components';

export const ContainerSC = styled.div`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;

  ${({ imgView }) => imgView && css`
    text-align: center;

    @media screen and (min-width: 576px) {
      text-align: left;
    }
  `};

  ${({ img }) => img && css`
    padding: 0 1rem;

    @media screen and (min-width: 1200px) {
      padding: 0;
    }
  `};

  ${({ gridChild }) => gridChild && css`
    grid-column: ${({ grid }) => grid};
  `};
`;
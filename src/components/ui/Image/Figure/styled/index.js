import styled from 'styled-components';

export const FigureSC = styled.figure`
  max-width: 100%;
  margin: 0.5rem;
  min-height: ${({minHeight}) => minHeight || 'auto'};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 576px) {
    max-width: 13.5rem;
  }
`;
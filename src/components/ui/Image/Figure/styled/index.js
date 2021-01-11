import styled from 'styled-components';

export const FigureSC = styled.figure`
  max-width: 100%;
  margin: ${({ margin }) => margin || '0.5rem'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
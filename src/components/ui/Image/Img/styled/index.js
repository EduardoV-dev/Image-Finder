import styled from 'styled-components';

export const Image = styled.img`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  margin: ${({ margin }) => margin || '0'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  max-height: ${({ maxHeight }) => maxHeight || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  object-fit: cover;
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
`;
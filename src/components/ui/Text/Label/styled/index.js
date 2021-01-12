import styled from 'styled-components';

export const LabelSC = styled.label`
  display: block;
  width: ${({ width }) => width || '100%'};
  font-size: 1rem;
  font-weight: ${({ fontWeight }) => fontWeight || 'bold'};
  color: ${({ theme }) => theme.text};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0.5rem'};
`;
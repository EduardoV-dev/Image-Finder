import styled from 'styled-components';

export const LabelSC = styled.label`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;
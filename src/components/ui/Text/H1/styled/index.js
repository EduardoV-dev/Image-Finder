import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ fontSize }) => fontSize || '2rem'};
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  margin-bottom: 1rem;
`;
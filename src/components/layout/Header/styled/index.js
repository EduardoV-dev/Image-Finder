import styled from 'styled-components';

export const HeaderContainer = styled.header`
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
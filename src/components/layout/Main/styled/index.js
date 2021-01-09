import styled from 'styled-components';

export const MainSC = styled.main`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
    min-height: ${({ minHeight }) => minHeight || 'auto'};
    background-color: ${({ theme }) => theme.secondary};
    top: 0;
    left: 0;
  }
`;
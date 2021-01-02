import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    display: block;
    width: 100%;
    min-height: 4rem;
    top: 0;
    left: 0;
    background-color: ${({theme}) => theme.secondary};
  }
`;
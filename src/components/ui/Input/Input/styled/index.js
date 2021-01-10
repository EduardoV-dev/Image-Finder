import styled, { css } from 'styled-components';

export const InputSC = styled.input`
  width: ${({ width }) => width || '100%'};
  font-size: ${({ fontSize }) => fontSize || '1rem'};
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  color: ${({ color }) => color || '#000'};
  padding: ${({ padding }) => padding || '0.7rem'};
  border: none;
  outline: none;
  font-family: 'Montserrat', sans-serif;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 2px inset ${({ theme }) => theme.secondary};
  }

  ${({ imgViewHeader }) => imgViewHeader && css`
    &:hover,
    &:focus {
      box-shadow: none;
    }

    @media screen and (min-width: 576px) {
      width: 19rem;
    }
  `};
`;
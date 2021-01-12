import styled, { css } from 'styled-components';

export const ButtonSC = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  border-radius: ${({ borderRadius }) => borderRadius || '10px'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
  font-weight: ${({ fontWeight }) => fontWeight || 'regular'};
  background-color: ${({ backgroundColor, theme }) => backgroundColor || theme.accent};
  color: ${({ color, theme }) => color || theme.secondary};
  transition: all 0.3s ease-out;
  
  &:hover,
  &:focus {
    filter: brightness(120%);
    cursor: pointer;
  }

  ${({ block }) => block && css`
    display: block;
    width: 100%;
  `};

  ${({ imgViewHeader }) => imgViewHeader && css`
    @media screen and (min-width: 576px) {
      padding: 0.8rem 2rem;
    }
  `};
`;
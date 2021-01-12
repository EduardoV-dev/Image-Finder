import styled, { css } from 'styled-components';

export const ErrorMessage = styled.p`
  width: 100%;
  background-color:  rgb(224, 54, 54);
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 10px;
  font-weight: bold;
  text-align: center;

  ${({ NotFound }) => NotFound && css`
    background-color: transparent;
    font-size: 2rem;
    margin: 2rem 0;
    color: ${({ theme }) => theme.text};
  `};
`;
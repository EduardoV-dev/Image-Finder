import styled, { css } from 'styled-components'

export const Aside = styled.aside`
  max-width: 25rem;
  min-height: 22rem;
  background-color: ${({ theme }) => theme.primaryDarken};
  border-radius: 10px;
  
  ${({ gridChild }) => gridChild && css`
    grid-column: ${({ grid }) => grid};
  `};
`;
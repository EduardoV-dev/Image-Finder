import styled, { css } from 'styled-components'

export const Aside = styled.aside`
  height: auto;
  max-width: 25rem;
  max-height: 19.5rem;
  background-color: ${({ theme }) => theme.primaryDarken};
  border-radius: 10px;
  
  ${({ gridChild }) => gridChild && css`
    grid-column: ${({ grid }) => grid};
  `};
`;
import styled, { css } from 'styled-components';

export const ContentSC = styled.section`
  ${({ gridChild }) => gridChild && css`
    grid-column: ${({ grid }) => grid};
  `};
`;
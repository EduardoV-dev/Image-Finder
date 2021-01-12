import styled, { css } from 'styled-components';

export const ButtonGroupSC = styled.div`
  margin-top: 2rem;

  ${({ dropDown }) => dropDown && css`
    margin-top: 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  `};
`;
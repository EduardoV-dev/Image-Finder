import styled, { css } from 'styled-components';

export const SpanSC = styled.span`
  font-weight: ${({ fontWeight }) => fontWeight || 'regular'};
  color: ${({ theme, fontColor }) => fontColor || theme.secondary};

  ${({ noUserSelect }) => noUserSelect && css`
    user-select: none;
  `};
`;
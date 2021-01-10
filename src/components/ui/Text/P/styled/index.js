import styled, { css } from 'styled-components';

export const Paragraph = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 576px) {
    width: 31rem;
  }

  ${({ status }) => status && css`
    margin-top: 1rem;

    @media screen and (min-width: 576px) {
      width: 100%;
    }
  `};
`;
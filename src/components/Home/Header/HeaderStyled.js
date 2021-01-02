import styled from 'styled-components';

export const HeaderContainer = styled.header`
  min-height: 12rem;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  text-align: center;
  line-height: 1.5;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};

  @media screen and (min-width: 576px) {
    width: 31rem;
  }
`;
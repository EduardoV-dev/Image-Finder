import styled from 'styled-components';

export const FooterSC = styled.footer`
  width: 90%;
  max-width: 27rem;
  min-height: 10rem;
  margin: 1rem auto;
  background-color: ${({ theme }) => theme.primaryDarken};
  color: ${({ theme }) => theme.text};
  border-radius: 10px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
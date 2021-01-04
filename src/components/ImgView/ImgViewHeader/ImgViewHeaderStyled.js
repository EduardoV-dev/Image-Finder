import styled from 'styled-components';

export const Input = styled.input`
  width: 13.5rem;
  border: none;
  outline: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  border-radius: 10px 0 0 10px;
  background-color: ${({ theme }) => theme.primary};
  padding: 0.8rem;

  @media screen and (min-width: 576px) {
    width: 19rem;
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 0 10px 10px 0;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.primaryDarken};
  padding: 0.8rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    filter: brightness(120%);
    cursor: pointer;
  }

  @media screen and (min-width: 576px) {
    padding: 0.8rem 2rem;
  }
`;
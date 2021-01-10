import styled from 'styled-components';

export const InputSC = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #fff;
  padding: 0.7rem;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;

  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 2px inset ${({ theme }) => theme.secondary};
  }
`;
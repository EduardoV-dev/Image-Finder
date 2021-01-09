import styled, { css } from 'styled-components';

export const DropBox = styled.div`
  width: 65%;
  margin: 1.5rem auto;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  position: relative;
  padding: 1rem;

  &::before {
    content: '';
    border: 15px solid red;
    border-color: transparent transparent ${({ theme }) => theme.secondary} transparent;
    position: absolute;
    top: -14%;
    left: calc(50% - 15px);
  }
`;

export const Title = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const DropItems = styled.ul`
  margin: 1rem 0;
  list-style: none;
`;

export const ButtonGroup = styled.form`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.secondary};
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  transition: all 0.3s ease-out;

  &:hover,
  &:focus {
    cursor: pointer;
    filter: brightness(120%);
  }

  ${({ open }) => open && css`
    background-color: ${({ theme }) => theme.primaryDarken};
    color: ${({ theme }) => theme.text};
  `};
`;
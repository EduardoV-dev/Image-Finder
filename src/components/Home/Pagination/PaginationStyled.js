import styled from 'styled-components';

export const Footer = styled.footer`
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

export const ButtonGroup = styled.div`
  margin-top: 2rem;
`;

export const Status = styled.p`
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  margin-top: 1rem;

  span {
    font-weight: bold;
    color: ${({theme}) => theme.secondary};
  }
`;

export const Button = styled.button`
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: ${({theme}) => theme.accent};
  color: ${({theme}) => theme.secondary};
  padding: 0.5rem 1rem;
  border-radius: 10px;
  font-size: regular;
  margin: 0.5rem;
  transition: all 0.3s ease-out;
  
  &:hover,
  &:focus {
    filter: brightness(120%);
    cursor: pointer;
  }

`;
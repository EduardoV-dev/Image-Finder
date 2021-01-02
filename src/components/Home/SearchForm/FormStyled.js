import styled from 'styled-components';

export const Form = styled.form`
  max-width: 56rem;
  background-color: ${({ theme }) => theme.primaryDarken};
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 3rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FormControl = styled.div`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    flex: 0 0 65%;

    &:last-of-type {
      flex: 0 0 30%;
      margin-top: 0.6rem;
    }
  }
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
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

export const Button = styled.button`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 0.8rem;
  background-color: ${({ theme }) => theme.accent};
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary};
  transition: all 0.3s ease-out;

  &:hover,
  &:focus {
    cursor: pointer;
    filter: brightness(120%);
  }
`;
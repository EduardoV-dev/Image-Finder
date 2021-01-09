import styled from 'styled-components';

export const UserInfo = styled.div`
  width: 65%;
  margin: 0 auto;
  margin-top: 2.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  text-align: center;
  padding-bottom: 1rem;

  span,
  p {
    color: ${({ theme }) => theme.text};
  }

  p {
    margin-bottom: 1rem;
  }
`;

export const Figure = styled.figure`
  min-height: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  object-fit: cover;
  margin-right: 0.5rem;
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
`;

export const ReactionsBox = styled.div`
  width: 65%;
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Reaction = styled.div`
  margin-left: ${({ ml }) => ml || '0'};
  margin-right: ${({ mr }) => mr || '0'};
  min-height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 50px;
  padding: 0 1rem;
  transition: all 0.3s ease-out;

  span {
    color: ${({ theme }) => theme.text};
    user-select: none;
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

export const Button = styled.button`
  display: block;
  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.secondary};
  padding: 0.7rem;
  font-weight: bold;
  font-size: 1rem;
  width: 65%;
  margin: 1rem auto 0 auto;
  border-radius: 30px;
  transition: all 0.3s ease-out;

  &:hover,
  &:focus {
    cursor: pointer;
    filter: brightness(120%);
  }
`;
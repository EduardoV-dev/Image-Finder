import styled from 'styled-components';

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  span,
  p {
    color: ${({ theme }) => theme.text};
  }
`;

export const Figure = styled.figure`
  min-height: 50px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
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
  width: 100%;
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

  span {
    color: ${({ theme }) => theme.text};
  }
`;
import styled from 'styled-components';

export const LiElement = styled.li`
  min-height: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;
import styled from 'styled-components';

export const Li = styled.li`
  min-height: 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.text};
`;

export const Radio = styled.input`
  margin-right: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: regular;
`;
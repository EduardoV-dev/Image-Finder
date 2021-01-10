import styled, { css } from 'styled-components';

export const ContainerSC = styled.div`
  width: ${({ width }) => width || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || '75rem'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  margin: ${({ margin }) => margin || '0 auto'};
  padding: ${({ padding }) => padding || '0'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};

  ${({ imgView }) => imgView && css`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 576px) {
      justify-content: flex-start
    }
  `};

  ${({ img }) => img && css`
    padding: 0 1rem;

    @media screen and (min-width: 1200px) {
      padding: 0;
    }
  `};

  ${({ userInfo }) => userInfo && css`
    margin-top: 2.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.secondary};
    text-align: center;
    padding-bottom: 1rem;
  `};

  ${({ flexRowCenter }) => flexRowCenter && css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  `};
`;
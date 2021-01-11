import styled, { css } from 'styled-components';

export const ContainerSC = styled.div`
  width: ${({ width }) => width || '100%'};
  max-width: ${({ maxWidth }) => maxWidth || '75rem'};
  min-height: ${({ minHeight }) => minHeight || 'auto'};
  margin: ${({ margin }) => margin || '0 auto'};
  padding: ${({ padding }) => padding || '0'};
  border-radius: ${({ borderRadius }) => borderRadius || '0'};
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
  position: ${({ position }) => position || 'relative'};

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

  ${({ dropDown }) => dropDown && css`
    width: 17.5rem;
    top: 86%;
    left: 50%;
    transform: translateX(-50%);
    
    &::before {
      content: '';
      border: 15px solid red;
      border-color: transparent transparent ${({ theme }) => theme.secondary} transparent;
      position: absolute;
      top: -13%;
      left: calc(50% - 15px);
    }

    @media screen and (min-width: 576px) {  
      width: 16.5rem;
    }

    @media screen and (min-width: 1200px) {
      width: 17.5rem;
    }
  `};
`;
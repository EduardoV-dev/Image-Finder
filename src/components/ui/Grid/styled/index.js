import styled from 'styled-components';

export const GridSC = styled.section`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-areas: 
    'BigImage BigImage BigImage BigImage BigImage'
    'ImageDetails ImageDetails ImageDetails ImageDetails ImageDetails';
  /* column-gap: 5rem; */
  gap: 2rem;

  @media screen and (min-width: 576px) {
    grid-template-areas: 
    'BigImage BigImage BigImage ImageDetails ImageDetails';
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) {
    padding: 0;
  }
`;
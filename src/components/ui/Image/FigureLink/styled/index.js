import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Figure = styled(Link)`
  display: inline-block;
  max-width: 100%;
  margin: 1rem 0;

  @media screen and (min-width: 576px) {
    max-width: 13.5rem;
  }
`;
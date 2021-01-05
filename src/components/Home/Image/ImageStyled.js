import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Figure = styled(Link)`
  max-width: 100%;
  margin: 0.5rem;

  @media screen and (min-width: 576px) {
    max-width: 13.5rem;
  }
`;

export const Img = styled.img`
  min-height: 22rem;
  max-height: 38rem;
  max-width: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
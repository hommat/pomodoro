import styled from 'styled-components';

export const SPhaseList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 1em 0;
  gap: 1em;

  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

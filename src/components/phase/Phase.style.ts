import styled from 'styled-components';

import { buttonStyles } from '../../styles';

export const SPhase = styled.button`
  ${buttonStyles}
  background: ${(p: { active: boolean }) => (p.active ? '#0e4546' : '#1e6262')};
`;

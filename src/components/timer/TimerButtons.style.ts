import styled from 'styled-components';

import { buttonStyles } from '../../styles';

export const STimerButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

export const STimerButton = styled.button`
  ${buttonStyles}
  color: rgba(255, 255, 255, 0.87);
  margin-right: 1em;

  &:last-child {
    margin-right: 0;
  }
`;

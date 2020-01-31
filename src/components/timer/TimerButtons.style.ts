import { styled } from '../../styles/theme';
import { buttonStyles } from '../../styles/shared';

export const STimerButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

export const STimerButton = styled.button`
  ${buttonStyles}
  color: ${(p) => p.theme.color.textLight};
  margin-right: 1em;

  &:last-child {
    margin-right: 0;
  }
`;

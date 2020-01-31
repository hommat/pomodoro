import { styled } from '../../styles/theme';
import { buttonStyles } from '../../styles/shared';

type Props = {
  active: boolean;
};

export const SPhase = styled.button<Props>`
  ${buttonStyles}
  background: ${(p) => {
    return p.active ? p.theme.color.primaryDark : p.theme.color.primary;
  }};
`;

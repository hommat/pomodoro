import { css } from 'styled-components';
import { ThemeProps } from './theme';

export const buttonStyles = css`
  border: none;
  padding: 0.35em 1.1em;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2px;
  background: ${(p: ThemeProps) => p.theme.color.primary};
  color: rgba(255, 255, 255, 0.87);
  outline: none;
  transition: ${(p: ThemeProps) => p.theme.transition.default};

  &:focus {
    background: ${(p: ThemeProps) => p.theme.color.primaryDark};
  }
`;

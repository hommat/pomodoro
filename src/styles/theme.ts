import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    background: '#f0f0f0',
    primary: '#cb3b3b',
    primaryDark: '#85203b',
    textDark: 'rgba(0, 0, 0, 0.87)',
    textLight: 'rgba(255, 255, 255, 0.87)'
  },
  transition: {
    default: '0.3s'
  }
};
export type Theme = typeof theme;
export type ThemeProps = { theme: Theme };
export const styled = baseStyled as ThemedStyledInterface<Theme>;

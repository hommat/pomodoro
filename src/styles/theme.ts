import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  color: {
    background: '#ecfffb',
    primary: '#1e6262',
    primaryDark: '#0e4546',
    textDark: 'rgba(0, 0, 0, 0.87)',
    textLight: 'rgba(255, 255, 255, 0.87)'
  }
};
export type Theme = typeof theme;
export type ThemeProps = { theme: Theme };
export const styled = baseStyled as ThemedStyledInterface<Theme>;

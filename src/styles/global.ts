import { createGlobalStyle } from 'styled-components';

import { ThemeProps } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${(p: ThemeProps) => p.theme.color.textDark};
    margin: 0;
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    background-color: ${(p: ThemeProps) => p.theme.color.background};
  }
`;

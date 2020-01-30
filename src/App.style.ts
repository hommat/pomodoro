import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: rgba(0, 0, 0, 0.87);
    margin: 0;
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    background-color: #ecfffb;
  }
`;

export const SApp = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 1em;
  max-width: 800px;
`;

export const STitle = styled.h1`
  font-size: 3.4em;
  margin: 0.4em 0;
`;

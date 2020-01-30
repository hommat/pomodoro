import { css } from 'styled-components';

export const buttonStyles = css`
  border: none;
  padding: 0.35em 1.1em;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  border-radius: 2px;
  background: #1e6262;
  color: rgba(255, 255, 255, 0.87);
  outline: none;
  transition: 0.4s;

  &:focus {
    background: #0e4546;
  }
`;

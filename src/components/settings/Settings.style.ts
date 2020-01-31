import { keyframes } from 'styled-components';

import { styled } from '../../styles/theme';
import { buttonStyles } from '../../styles/shared';

type InputProps = {
  error: boolean;
};

const entryTransiton = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const SOverlay = styled.div`
  position: fixed;
  left; 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.87);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${entryTransiton} 0.2s linear;
`;

export const SForm = styled.form`
  max-width: 400px;
  padding: 1em;
  margin: 1em;
  background: white;
  animation: ${entryTransiton} 0.2s linear;
`;

export const STitle = styled.h2`
  font-size: 2.4em;
`;

export const SSectionTitle = styled.h3`
  font-size: 1.6em;
  margin-bottom: 0.2em;
`;

export const SInputField = styled.div`
  margin-bottom: 0.3em;
`;

export const SLabel = styled.label`
  display: block;
`;

export const SInput = styled.input<InputProps>`
  width: 100%;
  padding: 0.3em;
  font-size: 1em;
  border-radius: 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(p) => (p.error ? 'red' : '#a2a2a2')};
  transition: 0.4s;
  outline: none;

  &:hover {
    border-color: ${(p) => (p.error ? 'red' : p.theme.color.primary)};
  }

  &:focus {
    border-color: ${(p) => (p.error ? 'red' : p.theme.color.primaryDark)};
  }
`;

export const SButtons = styled.div`
  margin-top: 0.8em;
  font-size: 0.95em;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4em;
`;

export const SButton = styled.button`
  ${buttonStyles}
`;

import React from 'react';

import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  describe('render', () => {
    it("should render heading with 'Hello world' text", () => {
      const rendered = render(<App />);
      expect(rendered.getByTestId('heading').textContent).toBe('Hello world');
    });
  });
});

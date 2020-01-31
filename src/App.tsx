import React from 'react';
import { ThemeProvider } from 'styled-components';

import { SettingsProvider } from './context/settings';
import { PhaseProvider } from './context/phase';
import { theme } from './styles/theme';

import SettingsController from './components/settings/SettingsController';
import Timer from './components/timer/Timer';
import PhaseList from './components/phase/PhaseList';
import GlobalStyles from './styles/global';
import { SApp, STitle } from './App.style';

const App = () => (
  <SApp>
    <ThemeProvider theme={theme}>
      <SettingsProvider>
        <PhaseProvider>
          <GlobalStyles />
          <STitle>Pomodoro timer</STitle>
          <PhaseList />
          <Timer />
          <SettingsController />
        </PhaseProvider>
      </SettingsProvider>
    </ThemeProvider>
  </SApp>
);

export default App;

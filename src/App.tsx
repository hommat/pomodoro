import React from 'react';

import { SettingsProvider } from './context/settings';
import { PhaseProvider } from './context/phase';

import SettingsController from './components/settings/SettingsController';
import Timer from './components/timer/Timer';
import PhaseList from './components/phase/PhaseList';
import { GlobalStyles, SApp, STitle } from './App.style';

const App = () => (
  <SApp>
    <SettingsProvider>
      <PhaseProvider>
        <GlobalStyles />
        <STitle>Pomodoro timer</STitle>
        <PhaseList />
        <Timer />
        <SettingsController />
      </PhaseProvider>
    </SettingsProvider>
  </SApp>
);

export default App;

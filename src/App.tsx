import React from 'react';

import { SettingsProvider } from './context/settings';
import { PhaseProvider } from './context/phase';

import Settings from './components/settings/Settings';
import Timer from './components/timer/Timer';
import PhaseList from './components/phase/PhaseList';

const App = () => (
  <SettingsProvider>
    <PhaseProvider>
      <Settings />
      <div>
        <h1>Timer</h1>
        <PhaseList />
        <Timer />
      </div>
    </PhaseProvider>
  </SettingsProvider>
);

export default App;

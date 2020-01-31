import React, { createContext } from 'react';

import { useObjectState } from '../hooks';

export type Settings = {
  pomodoroMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
};

export type Context = {
  settings: Settings;
  setSettings: (s: Partial<Settings>) => void;
};

export const SettingsContext = createContext<Context>({
  settings: {
    pomodoroMinutes: -1,
    shortBreakMinutes: -1,
    longBreakMinutes: -1
  },
  setSettings: () => new Error('Context must be used inside provider.')
});

export const initialSettings: Settings = {
  pomodoroMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 20
};

const getInitialSettings = (): Settings => {
  const localStorageSettings = localStorage.getItem('settings');
  if (localStorageSettings) return JSON.parse(localStorageSettings);

  return initialSettings;
};

export const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useObjectState<Settings>(
    getInitialSettings()
  );

  const handleSettingsChange = (updateSettings: Partial<Settings>) => {
    const newSettings: Settings = { ...settings, ...updateSettings };
    setSettings(newSettings);
    localStorage.setItem('settings', JSON.stringify(newSettings));
  };

  return (
    <SettingsContext.Provider
      value={{ settings, setSettings: handleSettingsChange }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

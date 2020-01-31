import React, { createContext } from 'react';

import { useObjectState } from '../hooks';

export type State = {
  pomodoroMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
};

export type Context = {
  settings: State;
  setSettings: (s: Partial<State>) => void;
};

export const SettingsContext = createContext<Context>({
  settings: {
    pomodoroMinutes: -1,
    shortBreakMinutes: -1,
    longBreakMinutes: -1
  },
  setSettings: () => new Error('Context must be used inside provider.')
});

export const initialSettings: State = {
  pomodoroMinutes: 25,
  shortBreakMinutes: 5,
  longBreakMinutes: 20
};

export const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useObjectState<State>(initialSettings);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

import React, { createContext } from 'react';

import { useObjectState } from '../hooks';

export type State = {
  pomodoroMinutes: number;
  shortBreakMinutes: number;
  longBreakMinutes: number;
};

export type Context = {
  state: State;
  setState: (s: Partial<State>) => void;
};

export const SettingsContext = createContext<Context>({
  state: {
    pomodoroMinutes: -1,
    shortBreakMinutes: -1,
    longBreakMinutes: -1
  },
  setState: () => new Error('Context must be used inside provider.')
});

export const SettingsProvider: React.FC = ({ children }) => {
  const [state, setState] = useObjectState<State>({
    pomodoroMinutes: 25,
    shortBreakMinutes: 5,
    longBreakMinutes: 20
  });

  return (
    <SettingsContext.Provider value={{ state, setState }}>
      {children}
    </SettingsContext.Provider>
  );
};

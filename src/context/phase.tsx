import React, { createContext, useState } from 'react';

export type Phase = 'pomodoro' | 'break-short' | 'break-long';

export type Context = {
  phase: Phase;
  setPhase: (phase: Phase) => void;
};

export const PhaseContext = createContext<Context>({
  phase: 'pomodoro',
  setPhase: () => new Error('Context must be used inside provider.')
});

export const PhaseProvider: React.FC = ({ children }) => {
  const [phase, setPhase] = useState<Phase>('pomodoro');
  const contextValue: Context = {
    setPhase: (p: Phase) => setPhase(p),
    phase
  };

  return (
    <PhaseContext.Provider value={contextValue}>
      {children}
    </PhaseContext.Provider>
  );
};

import React, { useRef, useEffect } from 'react';

import { useSettings, usePhase, useObjectState } from '../../hooks';

import TimerText from './TimerText';
import TimerButtons from './TimerButtons';

const Timer: React.FC = () => {
  const settings = useSettings();
  const phase = usePhase();
  const interval = useRef<null | number>(null);
  const seconds = useRef<number>(0);
  const minutes = useRef<number>(0);

  const getPhaseMinutes = (): number => {
    const {
      pomodoroMinutes,
      shortBreakMinutes,
      longBreakMinutes
    } = settings.state;

    switch (phase.phase) {
      case 'break-short':
        return shortBreakMinutes;
      case 'break-long':
        return longBreakMinutes;
      case 'pomodoro':
      default:
        return pomodoroMinutes;
    }
  };

  const [state, setState] = useObjectState({
    minutes: getPhaseMinutes(),
    seconds: 0,
    counting: false
  });

  const clearTimer = () => {
    if (interval.current) clearInterval(interval.current);
  };

  const resetTimer = () => {
    const phaseMinutes: number = getPhaseMinutes();
    setState({ minutes: phaseMinutes, seconds: 0, counting: false });
    minutes.current = phaseMinutes;
    seconds.current = 0;
  };

  useEffect(() => {
    resetTimer();
  }, [phase.phase]);

  useEffect(() => {
    if (state.counting) {
      const intervalFunction = () => {
        if (seconds.current > 0) seconds.current -= 1;
        else if (minutes.current > 0) seconds.current = 59;

        if (seconds.current === 59 && minutes.current > 0) minutes.current -= 1;
        if (minutes.current === 0 && seconds.current === 0) clearTimer();

        setState({ seconds: seconds.current, minutes: minutes.current });
      };

      interval.current = setInterval(intervalFunction, 1000) as any;
    } else clearTimer();

    return clearTimer;
  }, [state.counting]);

  const handleStartClick = () => setState({ counting: true });
  const handleStopClick = () => setState({ counting: false });
  const handleResetClick = () => resetTimer();

  return (
    <div>
      <TimerText minutes={state.minutes} seconds={state.seconds} />
      <TimerButtons
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
        onResetClick={handleResetClick}
      />
    </div>
  );
};

export default Timer;

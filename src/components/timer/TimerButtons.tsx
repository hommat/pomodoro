import React from 'react';

import { STimerButton, STimerButtons } from './TimerButtons.style';

type Props = {
  onStartClick: VoidFunction;
  onStopClick: VoidFunction;
  onResetClick: VoidFunction;
};

const TimerButtons: React.FC<Props> = ({
  onStartClick,
  onStopClick,
  onResetClick
}) => (
  <STimerButtons>
    <STimerButton type="button" onClick={onStartClick}>
      Start
    </STimerButton>
    <STimerButton type="button" onClick={onStopClick}>
      Stop
    </STimerButton>
    <STimerButton type="button" onClick={onResetClick}>
      Reset
    </STimerButton>
  </STimerButtons>
);

export default TimerButtons;

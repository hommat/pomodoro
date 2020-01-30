import React from 'react';

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
  <div>
    <button type="button" onClick={onStartClick}>
      Start
    </button>
    <button type="button" onClick={onStopClick}>
      Stop
    </button>
    <button type="button" onClick={onResetClick}>
      Reset
    </button>
  </div>
);

export default TimerButtons;

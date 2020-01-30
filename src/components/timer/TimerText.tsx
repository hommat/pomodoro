import React from 'react';

import { STimerText } from './TimerText.style';

type Props = {
  minutes: number;
  seconds: number;
};

const TimerText: React.FC<Props> = ({ minutes, seconds }) => {
  const makeNumberTwoDigit = (num: number): string => {
    if (num > 10) return num.toString();
    return `0${num}`;
  };

  return (
    <STimerText>
      {makeNumberTwoDigit(minutes)}:{makeNumberTwoDigit(seconds)}
    </STimerText>
  );
};

export default TimerText;

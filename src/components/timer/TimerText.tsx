import React from 'react';

import { getClockTime } from '../../utils/time';

import { STimerText } from './TimerText.style';

type Props = {
  minutes: number;
  seconds: number;
};

const TimerText: React.FC<Props> = ({ minutes, seconds }) => (
  <STimerText>{getClockTime(minutes, seconds)}</STimerText>
);

export default TimerText;

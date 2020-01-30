import React from 'react';

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
    <p>
      {makeNumberTwoDigit(minutes)}:{makeNumberTwoDigit(seconds)}
    </p>
  );
};

export default TimerText;

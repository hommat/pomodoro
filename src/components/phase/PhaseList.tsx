import React from 'react';

import Phase from './Phase';

const PhaseList: React.FC = () => (
  <div>
    <Phase name="Pomodoro" phase="pomodoro" />
    <Phase name="Short break" phase="break-short" />
    <Phase name="Long break" phase="break-long" />
  </div>
);

export default PhaseList;

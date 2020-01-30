import React from 'react';

import Phase from './Phase';
import { SPhaseList } from './PhaseList.style';

const PhaseList: React.FC = () => (
  <SPhaseList>
    <Phase name="Pomodoro" phase="pomodoro" />
    <Phase name="Short break" phase="break-short" />
    <Phase name="Long break" phase="break-long" />
  </SPhaseList>
);

export default PhaseList;

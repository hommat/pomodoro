import React from 'react';

import { Phase as PhaseType } from '../../context/phase';
import { usePhase } from '../../hooks';

import { SPhase } from './Phase.style';

type Props = {
  name: string;
  phase: PhaseType;
};

const Phase: React.FC<Props> = ({ name, phase }) => {
  const phaseContext = usePhase();
  const handleClick = () => phaseContext.setPhase(phase);

  return (
    <SPhase
      active={phase === phaseContext.phase}
      onClick={handleClick}
      type="button"
    >
      {name}
    </SPhase>
  );
};

export default Phase;

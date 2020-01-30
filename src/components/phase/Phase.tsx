import React from 'react';

import { Phase as PhaseType } from '../../context/phase';
import { usePhase } from '../../hooks';

type Props = {
  name: string;
  phase: PhaseType;
};

const Phase: React.FC<Props> = ({ name, phase }) => {
  const { setPhase } = usePhase();
  const handleClick = () => setPhase(phase);

  return (
    <button
      onClick={handleClick}
      style={{ background: 'pink', border: '2px solid black' }}
      type="button"
    >
      <h2>{name}</h2>
      <p>{phase}</p>
    </button>
  );
};

export default Phase;

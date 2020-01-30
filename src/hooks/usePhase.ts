import { useContext } from 'react';

import { Context, PhaseContext } from '../context/phase';

export default function(): Context {
  const context = useContext(PhaseContext);

  return context;
}

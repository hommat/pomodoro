import { useContext } from 'react';

import { Context, SettingsContext } from '../context/settings';

export default function(): Context {
  const context = useContext(SettingsContext);

  return context;
}

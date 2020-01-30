import { useState } from 'react';

export default function<T>(
  initialState: T
): [T, (newState: Partial<T>) => void] {
  const [state, setState] = useState<T>(initialState);
  const updateState = (newState: Partial<T>) => {
    setState({ ...state, ...newState });
  };

  return [state, updateState];
}

import React from 'react';

import { useSettings, useObjectState } from '../../hooks';

const Settings = () => {
  const settings = useSettings();
  const [state, setState] = useObjectState(settings.state);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    settings.setState(state);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Settings</h3>
      <label htmlFor="pomodoroMinutes">Pomodoro (minutes)</label>
      <input
        type="number"
        name="pomodoroMinutes"
        id="pomodoroMinutes"
        onChange={handleChange}
        value={state.pomodoroMinutes}
      />
      <br />
      <label htmlFor="shortBreakMinutes">Short break (minutes)</label>
      <input
        type="number"
        name="shortBreakMinutes"
        id="shortBreakMinutes"
        onChange={handleChange}
        value={state.shortBreakMinutes}
      />
      <br />
      <label htmlFor="longBreakMinutes">Long break (minutes)</label>
      <input
        type="number"
        name="longBreakMinutes"
        id="longBreakMinutes"
        onChange={handleChange}
        value={state.longBreakMinutes}
      />
      <br />
      <button type="submit">Update</button>
    </form>
  );
};

export default Settings;

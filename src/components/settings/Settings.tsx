import React from 'react';
import ReactDOM from 'react-dom';

import { useSettings, useObjectState } from '../../hooks';

import {
  SOverlay,
  SForm,
  STitle,
  SSectionTitle,
  SInputField,
  SLabel,
  SInput,
  SButtons,
  SButton
} from './Settings.style';

type Props = {
  onClose: VoidFunction;
};

type Errors = {
  pomodoroMinutes: boolean;
  shortBreakMinutes: boolean;
  longBreakMinutes: boolean;
};

const canNumberBeMinute = (n: number) => Number.isInteger(n) && n > 0;

const initialErrors: Errors = {
  pomodoroMinutes: false,
  shortBreakMinutes: false,
  longBreakMinutes: false
};

const Settings: React.FC<Props> = ({ onClose }) => {
  const { settings, setSettings, resetSettings } = useSettings();
  const [state, setState] = useObjectState(settings);
  const [errors, setErrors] = useObjectState<Errors>(initialErrors);

  const getErrors = (): Partial<Errors> => {
    const { pomodoroMinutes, shortBreakMinutes, longBreakMinutes } = state;
    const errs: Partial<Errors> = {};

    if (!canNumberBeMinute(pomodoroMinutes)) errs.pomodoroMinutes = true;
    if (!canNumberBeMinute(shortBreakMinutes)) errs.shortBreakMinutes = true;
    if (!canNumberBeMinute(longBreakMinutes)) errs.longBreakMinutes = true;

    return errs;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const occuredErrors = getErrors();
    if (Object.keys(occuredErrors).length === 0) {
      setSettings(state);
      onClose();
    } else setErrors({ ...initialErrors, ...occuredErrors });
  };

  const handleResetClick = () => {
    resetSettings();
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ [e.target.name]: e.target.value });
  };

  return ReactDOM.createPortal(
    <SOverlay>
      <SForm onSubmit={handleSubmit}>
        <STitle>Settings</STitle>
        <SSectionTitle>Custom timers (minutes)</SSectionTitle>
        <SInputField>
          <SLabel htmlFor="pomodoroMinutes">Pomodoro</SLabel>
          <SInput
            type="number"
            name="pomodoroMinutes"
            id="pomodoroMinutes"
            onChange={handleChange}
            value={state.pomodoroMinutes}
            error={errors.pomodoroMinutes}
            min={1}
          />
        </SInputField>
        <SInputField>
          <SLabel htmlFor="shortBreakMinutes">Short break</SLabel>
          <SInput
            type="number"
            name="shortBreakMinutes"
            id="shortBreakMinutes"
            onChange={handleChange}
            value={state.shortBreakMinutes}
            error={errors.shortBreakMinutes}
            min={1}
          />
        </SInputField>
        <SInputField>
          <SLabel htmlFor="longBreakMinutes">Long break</SLabel>
          <SInput
            type="number"
            name="longBreakMinutes"
            id="longBreakMinutes"
            onChange={handleChange}
            value={state.longBreakMinutes}
            error={errors.longBreakMinutes}
            min={1}
          />
        </SInputField>
        <SButtons>
          <SButton type="submit">Update</SButton>
          <SButton type="button" onClick={onClose}>
            Close
          </SButton>
          <SButton type="button" onClick={handleResetClick}>
            Reset
          </SButton>
        </SButtons>
      </SForm>
    </SOverlay>,
    document.getElementById('root')!
  );
};

export default Settings;

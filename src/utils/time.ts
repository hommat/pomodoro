function prepareNumberToClockTime(num: number): string {
  return num >= 10 ? num.toString() : `0${num}`;
}

export function getClockTime(minutes: number, seconds: number): string {
  const preparedMins = prepareNumberToClockTime(minutes);
  const preparedSecs = prepareNumberToClockTime(seconds);

  return `${preparedMins}:${preparedSecs}`;
}

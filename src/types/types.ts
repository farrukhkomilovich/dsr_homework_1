export interface IStopwatch {
  id: number;
  time: number;
  running: boolean;
}

export interface IStopwatchProps {
  sw: IStopwatch;
  remove: (id: number) => void;
}

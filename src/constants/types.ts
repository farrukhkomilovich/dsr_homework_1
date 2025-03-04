export interface StopwatchType {
  id: number;
  time: number;
  running: boolean;
}

export interface StopwatchProps {
  sw: StopwatchType;
  remove: (id: number) => void;
}

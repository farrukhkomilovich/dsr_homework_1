export interface IStopwatch {
  id: number;
  time: number;
  running: boolean;
}

export interface IStopwatchProps {
  sw: IStopwatch;
  remove: (id: number) => void;
}

export interface IButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  label?: string;
  variant?: "start" | "stop" | "reload" | "remove";
}
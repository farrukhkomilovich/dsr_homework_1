import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../ui/button/Button";
import { IStopwatch } from "../../App";

export interface IStopwatchProps {
  sw: IStopwatch;
  remove: (id: number) => void;
}

const StopwatchBox = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  justify-content: space-between;
`;

const StopwatchTime = styled.span`
  font-size: 18px;
`;

const StopwatchButtons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Stopwatch = ({ sw, remove }: IStopwatchProps) => {
  const [time, setTime] = useState<number>(sw.time);
  const [running, setRunning] = useState<boolean>(sw.running);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [running]);

  return (
    <StopwatchBox className="stopwatch">
      <StopwatchTime className="stopwatch__time">{time}s</StopwatchTime>
      <StopwatchButtons className="stopwatch__buttons">
        <Button 
          onClick={() => setRunning((prev) => !prev)} 
          variant={!running ? "start" : "stop"} 
          label={!running ? "▶️" : "⏸️"} 
        />
        <Button onClick={() => setTime(0)} variant="reload" label="🔄" />
        <Button onClick={() => remove(sw.id)} variant="remove" label="❌" />
      </StopwatchButtons>
    </StopwatchBox>
  );
};

export default Stopwatch;

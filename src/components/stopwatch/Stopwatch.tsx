import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { IStopwatchProps } from "../../types/types";
import Button from "../ui/button/Button";

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

const TimeDisplay = styled.span`
  font-size: 18px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Stopwatch = ({ sw, remove }: IStopwatchProps) => {
  const [time, setTime] = useState<number>(sw.time);
  const [running, setRunning] = useState<boolean>(sw.running);

  const intervalRef = useRef<number>(0);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [running]);

  return (
    <StopwatchBox>
      <TimeDisplay> {time}s </TimeDisplay>
      <ButtonGroup>
        <Button
          onClick={() => setRunning((prev) => !prev)}
          variant={!running ? "start" : "stop"}
          label={!running ? "▶️" : "⏸️"}
        />
        <Button onClick={() => setTime(0)} variant="reload" label="🔄" />
        <Button onClick={() => remove(sw.id)} variant="remove" label="❌" />
      </ButtonGroup>
    </StopwatchBox>
  )
}

export default Stopwatch
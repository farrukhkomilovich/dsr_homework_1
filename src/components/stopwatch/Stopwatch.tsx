import { useEffect, useRef, useState } from "react";
import styles from "./Stopwatch.module.css";
import { IStopwatchProps } from "../../types/types";
import Button from "../ui/button/Button";

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
    <div className={styles.box}>
      <span className={styles.time}> {time}s </span>
      <div className={styles.btns}>

        <Button
          onClick={() => setRunning((prev) => !prev)}
          className={!running ? styles.startBtn : styles.stopBtn}
          label={!running ? "▶️" : "⏸️"}
        />

        <Button
          onClick={() => setTime(0)}
          className={styles.reloadBtn}
          label="🔄"
        />

        <Button
          onClick={() => remove(sw.id)}
          className={styles.removeBtn}
          label="❌"
        />

      </div>
    </div >
  )
}

export default Stopwatch
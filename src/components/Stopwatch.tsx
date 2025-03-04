import { useEffect, useState } from "react";
import styles from "./Stopwatch.module.css";
import { StopwatchProps } from "../constants/types";
import Button from "./ui/button/Button";

const Stopwatch = ({ sw, remove }: StopwatchProps) => {
  const [time, setTime] = useState<number>(sw.time);
  const [running, setRunning] = useState<boolean>(sw.running);

  useEffect(() => {
    let interval: any
    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className={styles.box}>
      <span className={styles.time}> {time}s </span>
      <div className={styles.btns}>
        {
          !running
            ? (
              <Button onClick={() => setRunning(true)} className={styles.startBtn}>
                ▶️
              </Button>
            )
            : (
              <Button onClick={() => setRunning(false)} className={styles.stopBtn}>
                ⏸️
              </Button>
            )
        }

        <Button onClick={() => setTime(0)} className={styles.reloadBtn}> 🔄 </Button>

        <Button onClick={() => remove(sw.id)} className={styles.removeBtn}> ❌ </Button>
      </div>
    </div>
  )
}

export default Stopwatch
"use client";

import styles from "./countdown.module.scss";
import { useState, useEffect } from "react";

interface Props {
  dateString: string;
}

export default function Countdown({ dateString, ...args }: Props) {
  const oasis = new Date(dateString).getTime();
  const [curr, setCurr] = useState(new Date().getTime());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setCurr(new Date().getTime());
  }, []);

  useEffect(() => {
    let timeout: ReturnType<typeof setInterval> | undefined;
    if (oasis > curr) {
      timeout = setInterval(() => {
        setCurr(new Date().getTime());
      }, 1000);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [oasis]);

  useEffect(() => {
    if (oasis > curr) {
      const timeDiff = oasis - curr;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  }, [curr, oasis]);

  return (
    <div {...args} className={styles.countdown} id="countdownTimer">
      <div className={styles.timeSegment}>
        <p>{timeLeft.days}</p>
        <p>Days</p>
      </div>
      <p className={styles.colon}>&#58;</p>
      <div className={styles.timeSegment}>
        <p>{timeLeft.hours}</p>
        <p>Hours</p>
      </div>
      <p className={styles.colon}>&#58;</p>
      <div className={styles.timeSegment}>
        <p>{timeLeft.minutes}</p>
        <p>Mins</p>
      </div>
      {/* <p className={styles.colon}>&#58;</p>
            <div className={styles.timeSegment}>
                <p>{timeLeft.seconds}</p>
                <p>Seconds</p>
            </div> */}
    </div>
  );
}

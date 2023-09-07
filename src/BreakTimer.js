import React, { useState, useEffect } from "react";

function BreakTimer() {
  // Break timer state variables
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the break timer
  const startBreakTimer = () => {
    setIsRunning(true);
  };

  // Function to pause the break timer
  const pauseBreakTimer = () => {
    setIsRunning(false);
  };

  // Function to reset the break timer
  const resetBreakTimer = () => {
    setIsRunning(false);
    setMinutes(5);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;

    if (isRunning && minutes === 0 && seconds === 0) {
      clearInterval(interval);
      // Break timer has reached 0, handle what happens next
    } else if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            // Break timer has reached 0, handle what happens next
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, minutes, seconds]);

  return (
    <div>
      <div>
        <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
        <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
      </div>
      <button onClick={startBreakTimer}>Start Break</button>
      <button onClick={pauseBreakTimer}>Pause Break</button>
      <button onClick={resetBreakTimer}>Reset Break</button>
    </div>
  );
}

export default BreakTimer;

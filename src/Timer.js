import React, { useState, useEffect } from "react";

function Timer() {
  // Timer state variables
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Function to start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Function to pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    setMinutes(25);
    setSeconds(0);
  };

  useEffect(() => {
    let interval;

    if (isRunning && minutes === 0 && seconds === 0) {
      // Timer has reached 0, handle break timer here
    } else if (isRunning) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            // Timer has reached 0, handle break timer here
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
      <button onClick={startTimer}>Start</button>
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Timer;

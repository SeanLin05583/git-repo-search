import React, { useState, useEffect } from 'react';

const CountDownTimer = ({ seconds }) => {
  const [countDownTime, setCountDownTime] = useState(seconds);

  useEffect(() => {
    if (!countDownTime) return;

    const intervalId = setInterval(() => {
      setCountDownTime(countDownTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countDownTime]);

  return <span>{`Able to search again after ${countDownTime} seconds`}</span>
}

export default CountDownTimer;
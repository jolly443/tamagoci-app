import React from 'react';
import { useState, useEffect } from 'react';

const HatchTimer = ({ countdown }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  const getTime = () => {
    const time = Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  const [hatchTimer, setHatchTimer] = useState(countdown);
  useEffect(() => {
    hatchTimer > 0 && setTimeout(() => setHatchTimer(hatchTimer - 1), 1000);
  }, [hatchTimer]);

  return (
    <div>
      {hatchTimer}
    </div>
  );
};

export default HatchTimer;
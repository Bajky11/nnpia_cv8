import { useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());
  
    // Tick method to update time every second
    const tick = () => {
      setTime(new Date());
    };
  
    // Set interval to update time every second
    setInterval(tick, 1000);
  
    return (
      <div>
        <h2>Current Time:</h2>
        <p>{time.toLocaleTimeString()}</p>
      </div>
    );
  }
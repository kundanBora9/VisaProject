import React, { useState, useEffect } from 'react';

const CounterUp = ({ end, duration }) => {
  const [count, setCount] = useState(0); // Start from 0

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 100); // Calculate increment
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end); // Set final value when reaching the end
        clearInterval(timer); // Clear interval
      } else {
        setCount(Math.ceil(start)); // Increment the counter
      }
    }, 100); // Update every 100ms

    return () => clearInterval(timer); // Cleanup on unmount
  }, [end, duration]);

  return (
    <div>
      <h1>{count}</h1> {/* Display current count */}
    </div>
  );
};

export default CounterUp;

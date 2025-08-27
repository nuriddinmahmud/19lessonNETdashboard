"use client"
import { memo, useState } from 'react';

const Hero = () => {
  const [count, setCount] = useState(0)
  return (
    <div className="Hero">
      <h2>Hero {count}</h2>
      <button onClick={()=> setCount(p => p + 1)}>increment</button>
    </div>
  );
};

export default memo(Hero);
import React, { useState } from 'react';
import useCount from './useCount';
const Counter = () => {
  // const [count, setCount] = useState(0);

  // const handleIncrease = () => {
  //   setCount(count + 1);
  // };

  // return (
  //   <div>
  //     <p>Count: {count}</p>
  //     <button onClick={handleIncrease}>Increase</button>
  //   </div>
  // );
  const { count, increment, decrement, reset } = useCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;

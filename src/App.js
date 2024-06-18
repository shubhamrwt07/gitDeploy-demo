import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' and a function to update it 'setCount'
  const [count, setCount] = useState(0);

  // Function to handle button click and increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
          <h1>hello my name is shubhamrwt</h1>
      <h1>Counter: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;

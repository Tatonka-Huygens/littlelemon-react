

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <p>
      Count: {count}
      </p>
      <p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      </p>
      <p>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      </p>
    </div>
  );
}

export default Counter;
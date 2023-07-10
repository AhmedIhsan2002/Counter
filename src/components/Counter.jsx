import React from 'react';

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className='counter'>
      <button onClick={onDecrement}>-</button>
      <span>{count}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
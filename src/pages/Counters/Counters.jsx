import React, { State } from 'react';
import Container from '../../components/Container/container'
import Counter from '../../components/Counter';
import './Counters.css'
const Counters = () => {
    const [counters, setCounters] = State([0, 0, 0]);

  const handleIncrement = (index) => {
    const updatedCounters = [...counters];
    updatedCounters[index] += 1;
    setCounters(updatedCounters);
  };

  const handleDecrement = (index) => {
    const updatedCounters = [...counters];
    updatedCounters[index] -= 1;
    setCounters(updatedCounters);
  };
  return (
   
      <Container>
        <div className='counters-page'>
        {counters.map((count, index) => (
        <Counter
          key={index}
          count={count}
          onIncrement={() => handleIncrement(index)}
          onDecrement={() => handleDecrement(index)}
        />
      ))}
        </div>
      </Container>
   
  )
}

export default Counters

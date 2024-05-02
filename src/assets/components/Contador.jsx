import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export function Contador({ id }) {
  const [count, setCount] = useState(0);

  function sumar() {
    setCount(count + 1);
  }

  function restar() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div 
      className='contador'
      id={id}
      >
      <button onClick={() => restar() }> - </button>
      <p>{count}</p>
      <button onClick={() => sumar() }> + </button>
    </div>
  );
}
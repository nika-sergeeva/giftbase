import {  useState } from 'react'

export const Counter = () => {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

  return (
    <div>
      {count}
      <button onClick={increment}>adding</button>
      <button onClick={decrement}>decrementing</button>
    </div>
  )
}

 

import React, {useState} from 'react'

function Counter() {

    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);
  return (
    <div>
      <h1>{count}</h1>

     
      <button onClick={() => setCount(prev => prev + amount)}>Arttır</button>
      
      <h1>Arttırma + {amount}</h1>
      <button onClick={() => setAmount(2)}>+2</button>
      <button onClick={() => setAmount(5)}>+5</button>
      <button onClick={() => setAmount(9)}>+9</button>
    </div>
  )
}

export default Counter

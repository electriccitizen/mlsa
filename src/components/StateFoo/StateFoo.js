import React, { useState, useContext, createContext, useCallback } from "react"
import { createContainer } from "unstated-next"
import useLocalStorage from '../../hooks/use-local-storage';



function useCounter() {
  //let [count, setCount] = useState(0)

  const [count, setCount] = useLocalStorage('count', '');

  let decrement = () => setCount(count - 1)
  let increment = () => setCount(count + 1)
  return { count, decrement, increment }
}

let Counter = createContainer(useCounter)

function CounterDisplay() {
  let counter = Counter.useContainer()
  return (
    <div>
      <button onClick={counter.decrement}>-</button>
      <p>You clicked {counter.count} times</p>
      <button onClick={counter.increment}>+</button>
    </div>
  )
}

export function StateFoo() {
  return (
    <Counter.Provider>
      <CounterDisplay />
      <CounterDisplay />
    </Counter.Provider>
  )
}

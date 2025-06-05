import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // this use of useEffect will happen in every change of state
  // on any change of our virtual DOM efect
  // this is realy bad effect and we sound NEVER do
  // useEffect(() => {
  //   console.log('on mount and every state change');
  // });

  // if we add an empty array after declaration we will cause
  // that code in body of useEffect will ocure only once
  // at first render of code this is the way we want to manage
  // API asks or any getter of any dataquery

  useEffect(() => {
    console.log('on mount');
  }, []); // this exact line that make the magic happen

  return (
    <div>
      <button onClick={() => setCounter((p) => p + 1)}>Click{counter}</button>
      <button onClick={() => setCounter2((p) => p + 1)}>Click{counter2}</button>
    </div>
  );
}

export default App;

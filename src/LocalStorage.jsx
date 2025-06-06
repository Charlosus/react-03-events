import { useEffect, useState } from 'react';
import './App.css';

// lets make a button that will save its input in local storage
// to do that we use setCounter to count clicks
// and useEffect to pass value to local storage
export const LocalStorage = () => {
  //   const [counter, setCounter] = useState(0); // when we roload page in storage will be rewiten to 0
  // if we want our page to remeber we need to get its value from local storage
  const [counter, setCounter] = useState(() => {
    const counterFromLocalStorage = localStorage.getItem('counter'); // how ever if local storage would be clear this will get null
    if (counterFromLocalStorage !== null) {
      //   return counterFromLocalStorage; // again however ;D when we get it from local storage value would be a string its a normal behavior
      //   return parseInt(counterFromLocalStorage); // value need to parse to be set back to number or by ~~~
      return ~~counterFromLocalStorage;
    }
    return 0;
  });
  const handleClick = () => {
    setCounter((p) => p + 1);
  };

  useEffect(() => {
    console.log(counter, '?'); // to do that we need to use localStorage.set item
    localStorage.setItem('counter', counter); // that accept a key and value its save as json
  }, [counter]);

  return (
    <div>
      <button onClick={handleClick}>Click {counter}</button>
    </div>
  );
};

import { useEffect, useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [counter2, setCounter2] = useState(0);

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

// useEffect(() => {
//   console.log('on mount');
// }, []); // this exact line that make the magic happen

// this also good to use in intervals and timeouts

// if we woud want to event happen on change of our counter we need to add the
// in place of arrays
// useEffect(() => {
//   console.log('on mount and counterClick');
//   }, [counter, counter2]);

//   return (
//     <div>
//       <button onClick={() => setCounter((p) => p + 1)}>Click{counter}</button>
//       <button onClick={() => setCounter2((p) => p + 1)}>Click{counter2}</button>
//     </div>
//   );
// }

//=====================================================================================

// lest use useEffect to create button that toggle visibility of element

function Test() {
  // we create a function
  useEffect(() => {
    // that in body have a useEffect()
    console.log('Test mount'); // this is just log for testing
  }, []); // here we make that use effect hits onlu at first render
  return <h1>Test</h1>; // elemnt we want to toggle
}
log
function App() {
  // here we create a main component
  const [show, setShow] = useState(true); // thats destructurize useState and start value is true
  return (
    // and its return the component that have test nested
    <div>
      <button onClick={() => setShow((p) => !p)}>
        {' '}
        {/*here setShow takes curent state and change it to opposite */}
        Show/hide
      </button>
      {show && <Test />} {/**/}
    </div>
  );
}

//====================================================================================

// in useEffect in yet another usefull thing we can utilize in return we specify what we want
// to happen when effect ended or is dismounted this is particulary usefull when operating on intervals
// if interval was started and wasent cleared it will still count even being "invisible" from userperspective
// this can harm performance so here is some thing use full to stop that

function TestInt() {
  // function declaration
  useEffect(() => {
    // useEffect applied
    const id = setInterval(() => {
      // started interval in mounting component
      console.log();
    }, 1000); // time between intervals
    return () => {
      // return // he we comunicate we want something to happen after dismounting
      clearInterval(id); // body of return in this case clearing interval
    };
  });
};


export default App;

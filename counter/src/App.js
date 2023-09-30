// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

console.log("App is running");

let count = 0;
const addOne = () => {
  count++;
  console.log("addOne triggered", count)
  rerender()
}

const subtractOne = () => {
  count--;
  console.log("subtractOne triggered", count)
  ReactDOM.render(template2, document.getElementById('root'));
}

const reset = () => {
  count = 0;
  console.log("reset", count)
  App()
}

const template2 = (
  <div className='App'>
    <h className='App-header'>Count: {count}</h>
    <div className='App-header btn'>

      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  </div>
);

function Template() {
  return (
    <div className='App'>
      <h className='App-header'>Count: {count}</h>
      <div className='App-header btn'>

        <button onClick={addOne}>+1</button>
        <button onClick={subtractOne}>-1</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

function rerender() {

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(template2);
}

function App() {
  return Template()
}
export default App;

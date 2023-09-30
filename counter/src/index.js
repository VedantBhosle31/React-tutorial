import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function rerender() {
  root.render(
    <React.StrictMode>
      <Template />
    </React.StrictMode>
  );
}
rerender()
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
  // ReactDOM.render(template2, document.getElementById('root'));
  rerender()

}

const reset = () => {
  count = 0;
  console.log("reset", count)
  rerender()
}

function Template() {
  return (
    <div className='App'>
      <h1 className='App-header'>Count: {count}</h1>
      <div className='App-header btn'>

        <button onClick={addOne}>+1</button>
        <button onClick={subtractOne}>-1</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

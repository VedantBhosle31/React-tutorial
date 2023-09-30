import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

let state = false;
const changeState = () => {
  state = !state
  // console.log(state)
  renderscreen()
}

const Template = () => {
  return (
    <div>
      <div> Visibilty toggele</div>
      <button onClick={changeState}>{state ? "Hide Details" : "Show Details"} </button>
      {state ? <p>This Text was hidden by toggle </p> : ""}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
function renderscreen() {
  root.render(
    <React.StrictMode>
      <Template />
    </React.StrictMode>
  );
}
renderscreen()
reportWebVitals();

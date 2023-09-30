import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Template from './form'
import reportWebVitals from './reportWebVitals';


let options = []
const onFromSubmit = (e) => {
  const option = e.target.elements.option.value;
  if (option) {
    options.push(option)
  } else {
    console.log("epmty")
  }
  console.log(options)
  // e.perventDefault();
  bulid()
}
const head = () => {
  console.log(options)
  if (options.length > 0) {
    return (
      <div>

        <h1>All the in</h1>
        <ol>

          {
            options.map((option) => {
              return <li id='{option}'>{option}</li>
            })
          }
        </ol>
      </div>
    )
  }
}

const Template = () => {
  return (
    <div>
      {
        head()
      }

      <form onSubmit={onFromSubmit}>
        <input type="text" name="option" />
        <button>Submit</button>
      </form>
    </div>
  )
}

function bulid() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Template />
    </React.StrictMode>
  );
}
bulid()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

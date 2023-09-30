import React from 'react';
import ReactDOM from 'react-dom/client';
let options = []
const onFromSubmit = (e) => {
    e.perventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        options.push(option)
    }
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Template />
    );
}
const head = () => {
    console.log(options)
    if (options.length > 0) {
        return (<h1>All the in</h1>)
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



export default Template;

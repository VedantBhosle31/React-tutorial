
let options = []
const onFromSubmit = (e) => {
    e.perventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        options.push(option)
    }

}
const Template = () => {

    return (
        <div>
            <h1>Hi</h1>
            <form onSubmit={onFromSubmit}>
                <input type="text" name="option" />
                <button>Submit</button>
            </form>
        </div>
    )
}



export default Template;

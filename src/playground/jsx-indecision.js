console.log('app.js is running!');

// JSX = Java Script XML (extension of JS)
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}
const onFormSubmit = (e) => {
    e.preventDefault(); // prevents the full page refresh when the event is called

    const option = e.target.elements.option.value; // event target elements in form, option is "name" id, value

    if (option) {
        app.options.push(option) // pushes the text typed in input onto the option array
        e.target.elements.option.value = '' // clears the text in the input out on form submition
        renderPage();
    }
};

const removeAll = () => {
    app.options = []
    renderPage();
}
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}
const appRoot = document.getElementById("app");

const renderPage = function () {

const template = (
    <div>
        <h1>{app.title.toUpperCase()}</h1> 
        {app.subtitle && <p>{app.subtitle}!</p>}
        <p>{app.options.length > 0 ? 'Here are your options:' : 'No options available'}</p>
        <button disabled={app.options.length === 0} 
        onClick={onMakeDecision}>What Should I Do?</button>
        <button onClick={removeAll}>Remove All</button>
        <ol>
            {
                app.options.map((option) => {
                    return <li key={option}> {option}</li>
                })
            }
        </ol>
        <p>{app.options.length}</p>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
        </form>
    </div>);

    ReactDOM.render(template, appRoot)
}

renderPage();
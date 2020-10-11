class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    };
    componentDidMount() {
        try { // put all the code in try ctach so that if an error occurs, we can save the app without it crashing
            const json = localStorage.getItem('options'); // gets string of object from local storage and puts it in a variable
            const options = JSON.parse(json); // conerts the local storage string bsck into an object
            if (options) { // if options are true (& not empty), setState to const options
            this.setState(() => ({ options: options })); // implicitly return const options JSON object as the new object array
            }
        } catch(e) {
            // leave empty = "DO NOTHING" if error occurs!
        }

        // const json = localStorage.getItem('options'); // gets string of object from local storage and puts it in a variable
        // const options = JSON.parse(json); // conerts the local storage string bsck into an object
        // if (options) { // if options are true (& not empty), setState to const options
        // this.setState(() => ({ options: options })); // implicitly return const options JSON object as the new object array
        // }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) { // if options array length changes, do something
        const json = JSON.stringify(this.state.options) // converts the options state into a string and saves it in a variable for local storage to use
        localStorage.setItem('options', json) // saves the object string variable into local storage
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount!')
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    };
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter(option => { optionToRemove !== option })
             // filter to filter each option (like map)
             // conditional logic: optionToRemove (the selected option)
             // is set to not be equal to option which is false' in filter
             // since it is false it will be deleted because it doesn't match option
        }));
    };

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length) 
        const option = this.state.options[randomNum]
        alert(option)
    }
    
    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid value to add an item'
        } else if (this.state.options.indexOf(option) > -1) { // > -1 means theres is match for the value
            return 'Value already exists'
        }
        // if statements for validation
        this.setState((prevState) => ({options: prevState.options.concat(option)}))
    }
    render() {
        const subtitle = "Put your life in the hands of a computer!!!"

        return (
            <div>
            <Header subtitle={subtitle} />
            <Action 
                hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick} 
            />
            <Options 
                options={this.state.options} 
                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption} 
                //handleDeleteOption is a prop on <Options> b/c we dont have direct access to <Option>
            />
            <AddOption
                handleAddOption={this.handleAddOption} 
            />
            </div>
        );
    };
};
IndecisionApp.defaultProps = {
    options: []
}
const Header = (props) => {
    return  (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h3>{props.subtitle}</h3>}
        </div>
     );
}
Header.defaultProps = {
    title: 'Indecision App'
}

const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            What Should I Do?
            </button>
        </div>
    );
}
const Options = (props) => {
    return (
        <div>
            
            <button onClick={props.handleDeleteOptions}>Remove All</button> 
            {props.options.length === 0 && <p>No options available</p>} 
            {
             props.options.map((option) => 
             <Option key={option} 
             optionText={option}
             handleDeleteOption={props.handleDeleteOption}
             // handleDeleteOption has indirectly accessed <Option> as a prop by being 
             // passed down by the parent <Options>
             />)
            }
        </div>
    );
}
const Option = (props) => {
    return (
        <div>
       {props.optionText}
       <button 
       onClick={(e) => {
           props.handleDeleteOption(props.optionText)}
        }
        // takes click event and calls the handleDeleteOption function.
        // uses props.optionText to decipher which option is to be filtered and removed
       >Remove</button>
        </div>
    )
}
class AddOption extends React.Component {
    constructor(props) {
        super(props) 
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault(); // no default page refresh

        const option = e.target.elements.option.value.trim(); // pulls user info from input elemtns by 'name'
        // .trim() used to clear white spaces

        const error = this.props.handleAddOption(option)
        this.setState(() => ({error: error}))

        if(!error) {
            e.target.elements.option.value = ''; // if no error occurs, clear the input
        } 
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
                </form>
            </div>
        );
    };
};
ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
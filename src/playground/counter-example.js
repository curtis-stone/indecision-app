class Counter extends React.Component {
 
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        const string = localStorage.getItem('count') // grabs the count string variable from local storage and puts it in a new variable
        const numCount = parseInt(string, 10) // passes the stringed variable from local stor. and turns into to a number
        // dont need to use JSON.parseInt becsue it is not in Javascript Object Notation. it is just a regular Number Value
        if (!isNaN(numCount)) { // if numCount IS a number (opposite of isNaN()), do somehting
            this.setState(() => ({ count: numCount})) // sets count state object to number count
            console.log('componentDidMount!')
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) { // if prev state is not equal to current state, do something
            localStorage.setItem('count', this.state.count) // saves a variable named 'count' into local storage as a string value
            console.log('component updated!')
        } 
    }
    componentWillUnmount() {
        console.log('component un-mounted!')
    }

    handleAddOne() {
        console.log("added one");
        this.setState((prevState) => { // prevState argumnt in setState gives us access to 
    // the object and its properties before the event
            return {
                count: prevState.count + 1
            }
        })
    };

    handleMinusOne() {
        console.log('subtracted one');
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    };

    handleReset() {
        console.log('reset counter');
        this.setState(() => {
            return {
                count: 0
            }
        })
    };

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Clear</button>
            </div>
        )
    }
}
Counter.defaultProps = {
    count: 0
}
ReactDOM.render(<Counter />, document.getElementById("app"))

// let count = 0;
//     const addOne = () => {
//         count++;
//         renderCounterApp();
//     }
//     const minusOne = () => {
//         count--
//         renderCounterApp()
//     }
//     const reset = () => {
//         count = 0;
//         renderCounterApp()
//     }

  
//     const renderCounterApp = function () {
//         const templateThree = (
//             <div>
//                 <h1>Count: {count}</h1>
//                 <button onClick={addOne}>+1</button> 
//                 <button onClick={minusOne}>-1</button>
//                 <button onClick={reset}>Reset</button>
//             </div>
//         );
     // Some attributes have been renamed in JSX ex: Class => ClassName

    //  ReactDOM.render(templateThree, appRoot);
    // }
    //  renderCounterApp();
    // React essentially uses this function setup to render things to DOM after every change
    // Algorithims behind the scenes don't re-render everything, only the items that change
    // more efficient with algorithms watching the changes than render every single app every time!

    

// const user = {
//     name: 'CJ',
//     age: 23,
//     location: 'Georgia'
   
// }

//  function getLocation(location) {
//      if (location) {
//          return <p>Location: {location}</p>
//     } 
//  }

// const templateTwo = (
//     <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1> 
    
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>} 
  
//     {getLocation(user.location)}
//     </div>
// );

// const appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);

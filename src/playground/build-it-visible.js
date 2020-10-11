class Visibility extends React.Component {
    constructor(props) {
        // functions
        super(props)
        // this.renderPage = this.renderPage.bind(this)
        this.onToggle = this.onToggle.bind(this);
        this.state = {
            clicked: false,
            details: 'ello govner'
        }
    }
    onToggle() {
        console.log('onToggle Called')
        this.setState((prevState) => {
            return {
                clicked: !prevState.clicked
            }
        })
    }
    
    render() {
        return (
            <div>
            <h1> Visibility App</h1>
            <button onClick={this.onToggle}>
            {this.state.clicked ? 'Hide Details' : 'Show Details'}
            </button>
            {this.state.clicked && <p>{this.state.details}!</p>}
        </div>
        )
    }
}

ReactDOM.render(<Visibility />, document.getElementById("app"))

// let clicked = false
// const onToggle = () => {
//     clicked = !clicked;
//     renderPage();
// }

// const details = 'ello govner'
// const appRoot = document.getElementById("app")

// const renderPage = () => {
//     const template = (
        
//     )
//     ReactDOM.render(template, appRoot);
// };
// const template = (
//     <div>
//     <h1> Visibility App</h1>
//     <button onClick={onToggle}>Hide Menu</button>
//     </div>
// )


// ReactDOM.render(template, appRoot)
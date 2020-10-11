class SeatCount extends React.Component {
    constructor(props) {
        super(props);
        this.addParty = this.addParty.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
        this.removeParty = this.removeParty.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        this.state = {
            seats: 200,
            // guests: 0
        };
    };
    // onFormSubmit = (e) => {
    //     e.preventDefault(); // prevents the full page refresh when the event is called
    
    //     const addGuest = e.target.elements.add.value; // event target elements in form, option is "name" id, value
    
    //     if (addGuest) {
    //         console.log('add guest is true')
    //         // this.state.guests + this.addGuest // pushes the text typed in input onto the option array
    //         // e.target.elements.add.value = '' // clears the text in the input out on form submition
    //         // // renderPage();
    //     }
    // };
    addParty(e) {
        e.preventDefault(); // prevents the full page refresh when the event is called
        const addGuest = e.target.elements.add.value; // event target elements in form, option is "name" id, value
        if (addGuest && this.state.seats <= 200) {
            this.setState((prevState) => {
                return {
                    seats: prevState.seats - addGuest
                }
            })
        };
        if (addGuest && this.state.seats <= 0) {
            alert('Seats are full!')
        }
        e.target.elements.add.value = ''
    }

    removeParty(e) {
        e.preventDefault(); // prevents the full page refresh when the event is called
        const removeGuest = e.target.elements.remove.value; // event target elements in form, option is "name" id, value
        if (removeGuest && this.state.seats <= 199) {
            this.setState((prevState) => {
                return prevState.seats = prevState.seats + removeGuest
            
            });
        };
        // e.target.elements.add.value = ''
        // if (removeGuest && this.state.seats >= 200) {
        //     alert( 'All se')
        // }
    };
    resetCounter() {
        this.setState((prevState) => {
            return {
                seats: 200
            }
        });
    };
    render() {
        return(
            <div>
            <h1>Seat Counter</h1>
            <h3>Total Seats: {this.state.seats}</h3>
            <form onSubmit={this.addParty}>
                <input type="number" name="add"></input>
                <button>Add Party</button>
            </form>
            <form onSubmit={this.removeParty}>
                <input type="number" name="remove"></input>
                <button>Remove Party</button>
            </form>
            <button onClick={this.resetCounter}>Reset</button>
            <button>Back</button>
            </div>
        )
    }
};

ReactDOM.render(<SeatCount />, document.getElementById("app"))

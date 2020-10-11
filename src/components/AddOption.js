import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    
    handleAddOption = (e) => {
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                <input className="add-option__input" type="text" name="option" />
                <button className="button">Add Option</button>
                </form>
            </div>
        );
    };
};
import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";
import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined,
    })); // emplicitly defining the return is important!!!
  };

  handleDeleteOptions = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option),
      // filter to filter each option (like map)
      // conditional logic: optionToRemove (the selected option)
      // is set to not be equal to option which is false' in filter
      // since it is false it will be deleted because it doesn't match option
    }));
  };
  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      // change state to make the modal open
      selectedOption: option, // now when handle pick i ran in ' what should i do,
      // the option string is set to !! boolean and isOpen is true
      //Modal when open up
    }));
  };
  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid value to add an item";
    } else if (this.state.options.indexOf(option) > -1) {
      // > -1 means theres is match for the value
      return "Value already exists";
    }
    // if statements for validation
    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  };

  componentDidMount() {
    try {
      // put all the code in try ctach so that if an error occurs, we can save the app without it crashing
      const json = localStorage.getItem("options"); // gets string of object from local storage and puts it in a variable
      const options = JSON.parse(json); // conerts the local storage string bsck into an object
      if (options) {
        // if options are true (& not empty), setState to const options
        this.setState(() => ({ options: options })); // implicitly return const options JSON object as the new object array
      }
    } catch (e) {
      // leave empty = "DO NOTHING" if error occurs!
    }

    // const json = localStorage.getItem('options'); // gets string of object from local storage and puts it in a variable
    // const options = JSON.parse(json); // conerts the local storage string bsck into an object
    // if (options) { // if options are true (& not empty), setState to const options
    // this.setState(() => ({ options: options })); // implicitly return const options JSON object as the new object array
    // }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      // if options array length changes, do something
      const json = JSON.stringify(this.state.options); // converts the options state into a string and saves it in a variable for local storage to use
      localStorage.setItem("options", json); // saves the object string variable into local storage
    }
  }
  componentWillUnmount() {
    console.log("componentWillUnmount!");
  }
  render() {
    const subtitle = "Put your decision in the hands of a computer!";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />

          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              //handleDeleteOption is a prop on <Options> b/c we dont have direct access to <Option>
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>

        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}
// IndecisionApp.defaultProps = {
//     options: []
// }
export default IndecisionApp;

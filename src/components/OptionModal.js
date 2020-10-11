import React from 'react';
import Modal from "react-modal";  // from yarn add react-modal@2.2.2

const OptionModal = (props) => (    
    // react Modal needs these 2 props to work properly -> isOpen-{true} && contentLabel="anything"
    <Modal
        isOpen={!!props.selectedOption} // double !! makes the string/undefined turn to true' booleans
        onRequestClose={props.handleClearSelectedOption} // clears selectedOption with the function to 
                                        //close the Modal when user clicks away or uses escape key!
        contentLabel="Selected Option"
        closeTimeoutMS={200} // prop that defines the milliseconds before modal will close
        className="modal"> 
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
)
// react modal lets us define our own styles wit className
export default OptionModal;
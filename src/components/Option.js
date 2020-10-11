import React from 'react'

const Option = (props) => (
        <div className="option">
        <p className="option__text"> {props.count}. {props.optionText} </p>
       
       <button 
       className="button button--link" // modifier syntax
       onClick={(e) => {
           props.handleDeleteOption(props.optionText)}
        }
        // takes click event and calls the handleDeleteOption function.
        // uses props.optionText to decipher which option is to be filtered and removed
       >Remove</button>
        </div>
    );
    
export default Option;
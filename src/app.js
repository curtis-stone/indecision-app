//installing npm modules
// install -> import -> use
//install = yarn add validator
// import = import validator from 'validator' USE MODULE NAME INSTEAD OF A PATH

// import validator from 'validator';
// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css' // this css reset browser css base and allows styles to work in cross-browser settings!
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
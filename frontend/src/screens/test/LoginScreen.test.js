// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-dom

import React from 'react'
import ReactDom from 'react-dom'
import LoginScreen from '../LoginScreen'
// import {isTSAnyKeyword} from '@babel/types'
import { ListGroup } from 'react-bootstrap';

it("cartscreentest", ()=> {
const LoginScreen = document.createElement("LoginScreen");
ReactDom.render(<ListGroup />, LoginScreen)
});
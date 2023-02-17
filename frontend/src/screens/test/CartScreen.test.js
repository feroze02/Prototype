// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-dom

import React from 'react'
import ReactDom from 'react-dom'
import CartScreen from '../CartScreen'
// import {isTSAnyKeyword} from '@babel/types'
import { ListGroup } from 'react-bootstrap';

it("cartscreentest", ()=> {
const CartScreen = document.createElement("CartScreen");
ReactDom.render(<ListGroup />, CartScreen)
});
// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-dom

import React from 'react'
import ReactDom from 'react-dom'
import OrderScreen from '../OrderScreen'
// import {isTSAnyKeyword} from '@babel/types'
import { ListGroup } from 'react-bootstrap';

it("orderScreentest", ()=> {
const OrderScreen = document.createElement("OrderScreen");
ReactDom.render(<ListGroup />, OrderScreen)
});
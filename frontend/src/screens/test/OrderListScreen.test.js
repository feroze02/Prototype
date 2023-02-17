// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-dom

import React from 'react'
import ReactDom from 'react-dom'
import OrderListScreen from '../OrderListScreen'
// import {isTSAnyKeyword} from '@babel/types'
import { ListGroup } from 'react-bootstrap';

it("orderListScreentest", ()=> {
const OrderListScreen = document.createElement("OrderListScreen");
ReactDom.render(<ListGroup />, OrderListScreen)
});
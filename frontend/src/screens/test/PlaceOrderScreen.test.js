// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-dom

import React from 'react'
import ReactDom from 'react-dom'
import PlaceOrderScreen from '../PlaceOrderScreen'
// import {isTSAnyKeyword} from '@babel/types'
import { ListGroup } from 'react-bootstrap';

it("placeOrderScreentest", ()=> {
const PlaceOrderScreen = document.createElement("PlaceOrderScreen");
ReactDom.render(<ListGroup />, PlaceOrderScreen)
});
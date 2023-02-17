// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-dom

import React from 'react'
import ReactDom from 'react-dom'
import PaymentScreen from '../PaymentScreen'
// import {isTSAnyKeyword} from '@babel/types'
import { ListGroup } from 'react-bootstrap';

it("paymentScreentest", ()=> {
const PaymentScreen = document.createElement("PaymentScreen");
ReactDom.render(<ListGroup />, PaymentScreen)
});
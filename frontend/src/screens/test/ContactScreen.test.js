// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-dom

import React from 'react'
import ReactDom from 'react-dom'
import ContactScreen from '../ContactScreen'
// import {isTSAnyKeyword} from '@babel/types'
import { ListGroup } from 'react-bootstrap';

it("contactScreentest", ()=> {
const ContactScreen = document.createElement("ContactScreen");
ReactDom.render(<ListGroup />, ContactScreen)
});
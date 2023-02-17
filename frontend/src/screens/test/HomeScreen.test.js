// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-dom

import React from 'react'
import ReactDom from 'react-dom'
import HomeScreen from '../HomeScreen'
// import {isTSAnyKeyword} from '@babel/types'
import { ListGroup } from 'react-bootstrap';

it("homeScreentest", ()=> {
const HomeScreen = document.createElement("HomeScreen");
ReactDom.render(<ListGroup />, HomeScreen)
});
// Reference
// https://jestjs.io/
// https://reactjs.org/

import React from 'react'
import ReactDom from 'react-dom'
import Nav from '../Rating'
// import {isTSAnyKeyword} from '@babel/types'


it("ratingtest", ()=> {
const LinkContainer = document.createElement("LinkContainer");
ReactDom.render(<Nav />, LinkContainer)
});

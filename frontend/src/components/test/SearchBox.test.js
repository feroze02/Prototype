// Reference
// https://jestjs.io/
// https://reactjs.org/

import React from 'react'
import ReactDom from 'react-dom'
import Nav from '../SearchBox'
// import {isTSAnyKeyword} from '@babel/types'


it("searchBoxtest", ()=> {
const LinkContainer = document.createElement("LinkContainer");
ReactDom.render(<Nav />, LinkContainer)
});

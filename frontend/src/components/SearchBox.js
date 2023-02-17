// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-bootstrap


import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form 
    className='sb'
    onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
      ></Form.Control>
       <Button type='submit' variant='dark' className='p-1.5'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox

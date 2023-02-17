// Reference
// https://reactjs.org/
// https://www.npmjs.com/package/react-helmet


import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To EShop',
  description: 'We sell the used book for cheap',
  keywords: 'used book, buy used book, cheap used book',
}

export default Meta
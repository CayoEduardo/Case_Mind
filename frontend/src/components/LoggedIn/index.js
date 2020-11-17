import React from 'react'
import PropTypes from 'prop-types'

const index = (props) => {
  return (
    <div style={{ display: 'flex', width: '300px', height: '50px' }}>
      <p style={{ margin: '0px 20px' }}>Olá, Cayo Eduardo</p>
      <img
        style={{ width: '80px', height: '80px', borderRadius: '50%' }}
        src='https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image.jpg'
      ></img>
    </div>
  )
}

index.propTypes = {}

export default index

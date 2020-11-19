import React from 'react'
import PropTypes from 'prop-types'

const index = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '300px',
        height: '80px',
      }}
    >
      <p style={{ margin: '0 10px' }}>Olá, Cayo Eduardo</p>
      <img
        style={{ width: '60px', height: '60px', borderRadius: '50%' }}
        src='https://uploads-ssl.webflow.com/5e96913c9bac7c0b5cb3391c/5f44a7398c0cdf460857e744_img-image.jpg'
      ></img>
    </div>
  )
}

index.propTypes = {}

export default index

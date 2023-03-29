import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({title}) => {
  return (
    <footer className='footer'>
        <h1>{title}</h1>
        <h6> Copy© @Zubair 2023</h6>
    </footer>
  )
}

Footer.defaultProps  = {
    title: 'Footer Part'
}

Footer.propTypes = {
    title: PropTypes.string.isRequired
}

export default Footer
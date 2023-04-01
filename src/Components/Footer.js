import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Footer = ({title}) => {
  return (
    <footer className='footer'>
        <h6> Copy© @Zubair 2023</h6>
        <Link to='/dashboard'>Dashboard</Link>
    </footer>
  )
}

// Footer.defaultProps  = {
//     title: 'Footer Part'
// }

Footer.propTypes = {
    title: PropTypes.string.isRequired
}

export default Footer
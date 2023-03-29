import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <button className='btn'>Add</button>
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}
// const headingStyle = {
//     color: 'blue', 
//     backgroundColor:'green'
// }


export default Header
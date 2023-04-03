import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAddPro}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
          color={showAddPro ? 'red' : 'green'} 
          text={showAddPro ? 'Close' : 'Add'} 
          onClick={onAdd}>
        </Button>
    </header>
  )
}
Header.defaultProps = {
    title: 'Products'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
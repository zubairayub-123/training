import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({title, onAdd, showAddTask}) => {
  
    return (
      <header className='header'>
          <h1>{title}</h1>
          <Button 
          color={showAddTask ? 'red' : 'green'} 
          text={showAddTask ? 'Close' : 'Add'} 
          onClick={onAdd}>
        </Button>
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
import React from 'react';
import NavigationBar from './navigationBar';
import '../../styles.css'
import PropTypes from 'prop-types';


const Title = (props) => {
  return (
    <div className="wrapper">
      <p className="title">Hacker News Stories</p>
      <NavigationBar currentPage={props.currentPage} handleCurrentPageChange={props.handleCurrentPageChange} />
    </div>
  )
}

Title.propTypes = {
  handleCurrentPageChange: PropTypes.func.isRequired
}

export default Title;
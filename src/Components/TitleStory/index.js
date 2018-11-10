import React from 'react';
import NavigationBar from '../NavigationBar';
import './styles.css'
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
  currentPage: PropTypes.number.isRequired,
  handleCurrentPageChange: PropTypes.func.isRequired
}

export default Title;
import React from 'react';
import NavigationBar from '../NavigationBar';
import './styles.css'


const Title = (props) => {
  return (
    <div className="wrapper">
      <p className="title">Hacker News Stories</p>
      <NavigationBar currentPage={props.currentPage} handleCurrentPageChange={props.handleCurrentPageChange} />
    </div>

  )
}

export default Title;




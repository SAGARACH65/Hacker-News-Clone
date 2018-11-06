import React, { Component } from 'react';
import NavigationBar from '../NavigationBar';
import './styles.css'

export default class Title extends Component {
  render() {
    return (

      <div className="wrapper">
        <p className="title">Hacker News Stories</p>
        <NavigationBar />
      </div>

    )
  }
}

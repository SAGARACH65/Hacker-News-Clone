import React, { Component } from 'react';
import './styles.css'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="title">
        <button className="nav-button-left button">     </button>
        <p >nav</p>
        <button className="nav-button-right button">     </button>

      </div>
    )
  }
}

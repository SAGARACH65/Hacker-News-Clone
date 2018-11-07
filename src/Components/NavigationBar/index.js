import React from 'react';
import './styles.css'

const NavigationBar = (props) => {
  return (
    <div>
      <div className="title">
        <button
          className="nav-button-left button"
          onClick={() => props.handleCurrentPageChange(((props.currentPage - 1) >= 1) ? (props.currentPage - 1) : props.currentPage)}
        >
        </button>

        <p>{props.currentPage}</p>

        <button
          className="nav-button-right button"
          onClick={() => props.handleCurrentPageChange(props.currentPage + 1)}
        >
        </button>

      </div>
    </div>
  )
}
export default NavigationBar;

import React from 'react';
import '../../styles.css';
import PropTypes from 'prop-types';

const NavigationBar = (props) => {
  return (
    <div>
      <div className="title">
        <button
          className="nav-button-left button"
          onClick={() => props.handleCurrentPageChange(((props.currentPage - 1) >= 1) ? (props.currentPage - 1) : props.currentPage)}
        />

        <p>{props.currentPage}</p>

        <button
          className="nav-button-right button"
          onClick={() => props.handleCurrentPageChange(props.currentPage + 1)}
        />

      </div>
    </div>
  )
}

NavigationBar.propTypes = {
  currentPage: PropTypes.number.isRequired,
  handleCurrentPageChange: PropTypes.func.isRequired
}

export default NavigationBar;


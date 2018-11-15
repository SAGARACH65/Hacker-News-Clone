
import React from 'react';
import UserAvatar from './userAvatar';
import '../../styles.css';
import PropTypes from 'prop-types';

const Comment = props => {
    return (

        <div className='comment-container' style={{ marginLeft: props.margin }} >
            <UserAvatar time={props.time} by={props.by} />
            <p>{props.text}</p>
        </div >

    )
}

Comment.propTypes = {
    text: PropTypes.string.isRequired,
    margin: PropTypes.number.isRequired,
    by: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}

export default Comment;


import React from 'react';
import PropTypes from 'prop-types';
import '../../styles.css';

const CommentHeader = props => {
    return (
        <>
            <p className="header">Comments</p>
            <div className="title-container">
                <a href={props.url}> <p className="title-comment">{props.title}</p></a>
                <p className="author">by {props.by} {props.time} ago</p>
            </div>
        </>
    )
}

CommentHeader.propTypes = {
    by: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
}

export default CommentHeader;



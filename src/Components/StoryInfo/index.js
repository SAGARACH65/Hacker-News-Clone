import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';




const StoryInfo = props => {
    return (
        < >
            <p className='info'>
                {props.score} points by <i>{props.by}</i> on {props.date + " "}
                |<a href={`/comments/${props.id}`}>
                    {" " + props.descendants} comments
                     </a>
            </p>
        </>
    )
}

StoryInfo.propTypes = {
    score: PropTypes.number.isRequired,
    by: PropTypes.string.isRequired,
    descendants: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
}

export default StoryInfo;

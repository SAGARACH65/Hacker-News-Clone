import React from 'react';
import '../../styles.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const StoryInfo = props => {
    return (
        
            <p className='info'>
                {props.score} points by <i>{props.by}</i> on {props.date + " "}
                |<Link to={`/comments/${props.id}`}>
                    {" " + props.descendants} comments
                     </Link>
            </p>
      
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

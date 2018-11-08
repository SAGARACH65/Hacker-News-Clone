import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const StoryInfo = (props) => {
    return (
        <div >
            <p className='info'>

                {props.score} points by <strong>{props.by}</strong> |
                     <a href={`/comments/${props.id}`}>
                    {" " + props.descendants} comments
                     </a>

            </p>

        </div>
    )
}

StoryInfo.propTypes = {
    score: PropTypes.number,
    by: PropTypes.string,
    descendants: PropTypes.number,
    id: PropTypes.number
}

export default StoryInfo;

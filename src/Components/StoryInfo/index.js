import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const StoryInfo = (props) => {
    return (
        <div >
            <p >
                <div className='info'>

                    {props.score} points by <strong>{props.by}</strong> |
                     <a href={`/comments/${props.id}`} className="hey">
                        {" " + props.descendants} comments
                     </a>

                </div>
            </p>

        </div>
    )
}

export default StoryInfo;

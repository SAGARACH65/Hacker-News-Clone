import React from 'react';
import './styles.css';

const StoryInfo = (props) => {
    return (
        <div >
            <p className='info'>
              
                    {props.score} points by <strong>{props.by}</strong> |
                     <a href={`/comments/${props.id}`} className="hey">
                        {" " + props.descendants} comments
                     </a>
              
            </p>

        </div>
    )
}

export default StoryInfo;

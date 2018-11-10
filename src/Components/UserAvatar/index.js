import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'

const UserAvatar = props => {
    return (
        <div className="container-avatar">
            <img src={require('./user.png')} alt="NA" className="user-img" />
            <div>
                <p >{props.by}</p>
                <p>{props.time} ago</p>
            </div>
        </div>
    )
}

UserAvatar.propTypes = {
    text: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired
}

export default UserAvatar


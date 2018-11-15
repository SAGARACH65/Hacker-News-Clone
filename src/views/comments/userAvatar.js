import React from 'react'
import PropTypes from 'prop-types'
import '../../styles.css';

const UserAvatar = props => {
    return (
        <div className="container-avatar">
            <img src={require('../../assets/user.png')} alt="NA" className="user-img" />
            <div>
                <p className="written-by" ><strong>{props.by}</strong></p>
                <p className="written-on">{props.time} ago</p>
            </div>
        </div>
    )
}

UserAvatar.propTypes = {
    time: PropTypes.string.isRequired,
    by: PropTypes.string.isRequired
}

export default UserAvatar


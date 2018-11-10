import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { calculateTimeDifference } from '../../Utils.js'
import UserAvatar from '../UserAvatar'
import './styles.css'

const COMMENT_URL = 'https://hacker-news.firebaseio.com/v0/item/';

export default class Comment extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired
    }

    constructor() {
        super();
        this.state = {
            text: '',
            by: '',
            kids: [],
            time: ''
        }
    }

    async componentDidMount() {
        let response = await fetch(`${COMMENT_URL}${this.props.id}.json`);
        let result = await response.json();

        this.setState({
            by: result.by,
            kids: result.kids,
            text: result.text,
            time: calculateTimeDifference(result.time)
        });
    }

    render() {
        return (
            <div className='comment-container' style={{ marginLeft: this.props.margin }} >
                <UserAvatar text={this.state.text} time={this.state.time} by={this.state.by} />
                <p>{this.state.text}</p>
            </div >
        )
    }
}

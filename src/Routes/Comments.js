import React, { Component } from 'react'
import CommentHeader from '../Components/CommentHeader';
import Comment from '../Components/Comment';
import { calculateTimeDifference } from '../Utils.js'

const STORY_URL = 'https://hacker-news.firebaseio.com/v0/item/';
const MARGIN = 100;

export default class Comments extends Component {

  constructor() {
    super();
    this.state = {
      by: '',
      kids: [],
      title: '',
      url: '',
      time: 0
    }
  }

  async componentDidMount() {
    let response = await fetch(`${STORY_URL}${this.props.match.params.id}.json`);
    let result = await response.json();

    this.setState({
      by: result.by,
      kids: result.kids,
      title: result.title,
      url: result.url,
      time: calculateTimeDifference(result.time)
    });
  }

  render() {
    return (
      <>
        <CommentHeader by={this.state.by} title={this.state.title} url={this.state.url} time={this.state.time} />

        {this.state.kids.map(comment => (
          <Comment id={comment} margin={MARGIN} />
        ))}

      </>
    )
  }
}

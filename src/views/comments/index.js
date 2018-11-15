import React, { Component } from 'react'
import CommentHeader from './commentHeader';
import Comment from './comment';
import { calculateTimeDifference } from '../../utils/timeConverter.js'

const STORY_URL = 'https://hacker-news.firebaseio.com/v0/item/';
const MARGIN = 100;
let comments = [];

export default class Comments extends Component {

  constructor() {
    super();
    this.state = {
      by: '',
      kids: [],
      title: '',
      url: '',
      timeDifference: ''
    }
  }

  async fetchComments(comment, margin) {

    const result = await Promise.all(comment.map(async commentID => {
      const response = await fetch(STORY_URL + commentID + ".json");
      const { by, kids, text, time } = await response.json();
      const timeDifference = calculateTimeDifference(time);
      const result = [{ by, text, timeDifference, margin }];
      if (kids) result.push(...await this.fetchComments(kids, margin + MARGIN));

      return result;
    }));

    return [].concat(...result);

  }

  async componentDidMount() {
    const response = await fetch(`${STORY_URL}${this.props.match.params.id}.json`);
    const result = await response.json();

    comments = await this.fetchComments(result.kids, MARGIN);
    this.setState({
      by: result.by,
      kids: result.kids,
      title: result.title,
      url: result.url,
      timeDifference: calculateTimeDifference(result.time)
    });
  }

  render() {
    return (
      <>
        <CommentHeader by={this.state.by} title={this.state.title} url={this.state.url} time={this.state.timeDifference} />

        {comments.map(comment => (
          <Comment by={comment.by} margin={comment.margin} text={comment.text} time={comment.timeDifference} />
        ))}

      </>
    )
  }
}

import React, { Component } from 'react'
import CommentHeader from '../Components/CommentHeader';
import Comment from '../Components/Comment';
import { calculateTimeDifference } from '../Utils.js'

const STORY_URL = 'https://hacker-news.firebaseio.com/v0/item/';
const MARGIN = 100;
let comments = [];
let totalComments;

export default class Comments extends Component {

  constructor() {
    super();
    this.state = {
      by: '',
      kids: [],
      title: '',
      url: '',
      time: ''
    }
  }

  async fetchComments(comment, margin) {
    comment.map(async commentId => {
      let response = await fetch(`${STORY_URL}${commentId}.json`);
      let result = await response.json();

      comments.push({
        by: result.by,
        text: result.text,
        time: calculateTimeDifference(result.time),
        margin: margin
      });

      if (comments.length === totalComments + 1) this.forceUpdate();

      if (result.kids !== undefined) this.fetchComments(result.kids, margin * 2);
    });
  }

  async componentDidMount() {
    let response = await fetch(`${STORY_URL}${this.props.match.params.id}.json`);
    let result = await response.json();

    totalComments = result.descendants;
    await this.fetchComments(result.kids, MARGIN);
console.log(comments)
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

        {comments.map(comment => (
          <Comment by={comment.by} margin={comment.margin} text={comment.text} time={comment.time} />
        ))}

      </>
    )
  }
}

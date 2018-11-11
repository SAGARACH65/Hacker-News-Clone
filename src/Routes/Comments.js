import React, { Component } from 'react'
import CommentHeader from '../Components/CommentHeader';
import Comment from '../Components/Comment';
import { calculateTimeDifference } from '../Utils/TimeConverter.js'

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
      time: ''
    }
  }

  async fetchComments(comment, margin) {
    // return new Promise((resolve, reject) => {
    //   comment.map(async commentId => {
    //     let response = await fetch(`${STORY_URL}${commentId}.json`);
    //     let result = await response.json();
    //     comments.push({
    //       by: result.by,
    //       text: result.text,
    //       time: calculateTimeDifference(result.time),
    //       margin: margin
    //     });
    //     console.log(comments)

    //     if (comments.length === totalComments + 1) {
    //       // console.log(resolve('a'))
    //      resolve('a');

    //     }

    //     if (result.kids !== undefined) this.fetchComments(result.kids, margin * 2);
    //   });
    // });

    // await Promise.all(comment.map(async commentId => {
    //   let response = await fetch(`${STORY_URL}${commentId}.json`);
    //   let result = await response.json();

    //   if (result.kids) {
    //     const children = await this.fetchComments(result.kids, margin * 2);
    //     comments.push(...children);
    //   }

    //   comments.push({
    //     by: result.by,
    //     text: result.text,
    //     time: calculateTimeDifference(result.time),
    //     margin: margin
    //   });
    // }));


    const result = await Promise.all(comment.map(async commentID => {
      const response = await fetch(STORY_URL + commentID + ".json");
      let { by, kids, text, time } = await response.json();
      time = calculateTimeDifference(time);
      const result = [{ by, text, time, margin }];
      if (kids) result.push(...await this.fetchComments(kids, margin + MARGIN));

      return result;
    }));

    return [].concat(...result);

  }

  async componentDidMount() {
    let response = await fetch(`${STORY_URL}${this.props.match.params.id}.json`);
    let result = await response.json();

    comments = await this.fetchComments(result.kids, MARGIN);

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

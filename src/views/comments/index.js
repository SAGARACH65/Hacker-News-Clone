import React, { Component } from 'react'
import CommentHeader from './commentHeader';
import Comment from './comment';
import { calculateTimeDifference } from '../../utils/timeConverter.js';
import { connect } from 'react-redux';
import { addComments, addStory } from '../../actions';
import Loading from '../../components/loading'

const STORY_URL = 'https://hacker-news.firebaseio.com/v0/item/';
const MARGIN = 100;

class Comments extends Component {

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

    this.props.addComments(await this.fetchComments(result.kids, MARGIN));

    this.props.addStory(result.url, result.title, result.id, result.descendants, result.kids, result.score, result.by, calculateTimeDifference(result.time));
  }

  render() {
    const story = this.props.storyDetails[this.props.match.params.id];
    return (
      <div>
        <p className="header">Comments</p>
        {(story && this.props.commentList)
          ?
          <div>
            <CommentHeader by={story.by} title={story.title} url={story.url} time={story.time} />

            {this.props.commentList.map(comment => (
              <Comment by={comment.by} margin={comment.margin} text={comment.text} time={comment.timeDifference} />
            ))}

          </div>
          :
          <Loading />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ stories, comments }) => ({
  storyDetails: stories.storiesDetails,
  commentList: comments.comments
});

const mapDispatchToProps = dispatch => ({
  addStory: (link, title, id, descendants, kids, score, by, time) => {
    dispatch(addStory(link, title, id, descendants, kids, score, by, time))
  },
  addComments: comments => {
    dispatch(addComments(comments))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

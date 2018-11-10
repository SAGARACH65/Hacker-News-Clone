import React, { Component } from 'react';
import './styles.css';
import StoryInfo from '../StoryInfo';
import PropTypes from 'prop-types';
import { timeConverter} from '../../Utils.js'

const URL_STORY = 'https://hacker-news.firebaseio.com/v0/item/';

export default class Story extends Component {
  static propTypes = {
    storyIndex: PropTypes.number.isRequired
  }
  constructor() {
    super();
    this.state = {
      link: '',
      title: '',
      id: 0,
      descendants: 0,
      score: 0,
      by: '',
      time: 0
    }
  }

  async componentDidMount() {
    let response = await fetch(`${URL_STORY}${this.props.storyIndex}.json`);
    let result = await response.json();

    this.setState({
      link: result.url,
      title: result.title,
      id: result.id,
      descendants: result.descendants,
      score: result.score,
      by: result.by,
      time: result.time
    });
  }

  render() {
    return (
      <div className="list-wrapper">

        <a target="blank" href={this.state.link} style={{ textDecoration: 'none' }} >
          <strong> <p className="stories" >{this.state.title}</p></strong>
        </a>

        <StoryInfo
          id={this.state.id}
          date={timeConverter(this.state.time).date}
          score={this.state.score}
          descendants={this.state.descendants}
          by={this.state.by}
        />

      </div>
    )
  }
}


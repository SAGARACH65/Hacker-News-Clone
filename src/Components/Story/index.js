import React, { Component } from 'react';
import './styles.css';
import StoryInfo from '../StoryInfo';

const URL_STORY = 'https://hacker-news.firebaseio.com/v0/item/';
export default class ListItem extends Component {

  constructor() {
    super();
    this.state = {
      link: '',
      title: '',
      id: '',
      descendants: '',
      score: '',
      by: ''
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
      by: result.by
    });
  }

  render() {
    return (
      <div className="list-wrapper">

        <a target="blank" href={this.state.link} style={{ textDecoration: 'none' }} >
          <p className="stories" >{this.state.title}</p>
        </a>

        <StoryInfo id={this.state.id} score={this.state.score} descendants={this.state.descendants} by={this.state.by} />

      </div>
    )
  }
}

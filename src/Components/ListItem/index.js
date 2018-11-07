import React, { Component } from 'react'
import './styles.css';

const URL_STORY = 'https://hacker-news.firebaseio.com/v0/item/';
export default class ListItem extends Component {

  constructor() {
    super();
    this.state = {
      link: '',
      title: '',
      kids: ''
    }
  }
  componentDidMount() {
    fetch(`${URL_STORY}${this.props.storyIndex}.json`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            link: result.url,
            title: result.title,
            kids: result.kids
          });
        },
        (error) => {
          console.log(error);
        }
      )
  }

  render() {
    return (
      <div className="list-wrapper">
        <a href={this.state.link}>
          <p className="stories">{this.state.title}</p>
        </a>
      </div>
    )
  }
}
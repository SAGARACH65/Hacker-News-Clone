import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Story from '../Components/Story';

// const STORY_URL=
export default class Comments extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  componentDidMount() {
    fetch()
      .then(res => res.json())
      .then(
        (result) => {
          this.setStoriesToShow(result);

          this.setState({
            stories: result
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <>
        <h1>{this.props.match.params.id}</h1>
      </>
    )
  }
}

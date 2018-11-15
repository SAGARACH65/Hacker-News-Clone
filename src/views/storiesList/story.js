import React, { Component } from 'react';
import '../../styles.css';
import StoryInfo from './storyInfo';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { timeConverter } from '../../utils/timeConverter';
import { addStory } from '../../actions';
import Loading from '../../components/loading'

const URL_STORY = 'https://hacker-news.firebaseio.com/v0/item/';

class Story extends Component {

  static propTypes = {
    storyIndex: PropTypes.number.isRequired,
    addStory: PropTypes.func.isRequired,
    storyDetails: PropTypes.array.isRequired,
  }

  async componentDidMount() {
    let response = await fetch(`${URL_STORY}${this.props.storyIndex}.json`);
    let result = await response.json();
    this.props.addStory(result.url, result.title, result.id, result.descendants, result.score, result.by, result.time);
  }

  render() {
    const story = this.props.storyDetails[this.props.storyIndex];
    return (

      < div className="list-wrapper" >
        {(story) ?
          <>
            <a target="blank" href={story.link} style={{ textDecoration: 'none' }} >
              <strong> <p className="stories" >{story.title}</p></strong>
            </a>
            <StoryInfo
              id={story.id}
              date={timeConverter(story.time).date}
              score={story.score}
              descendants={story.descendants}
              by={story.by}
            />
          </>
          :
          < div >
            <Loading />
          </div>
        }

      </div>
    )
  }
}

const mapStateToProps = ({ stories }) => ({
  storyDetails: stories.storiesDetails
});


const mapDispatchToProps = dispatch => ({
  addStory: (link, title, id, descendants, score, by, time) => {
    dispatch(addStory(link, title, id, descendants, score, by, time))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Story);



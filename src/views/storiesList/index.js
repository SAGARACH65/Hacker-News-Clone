import React, { Component } from 'react';
import Title from './titleStory';
import Story from './story';
import { connect } from 'react-redux';
import { addStoriesID, addCurrentPage } from '../../actions';
import Spinner from '../../components/loading';
import PropTypes from 'prop-types';


const URL_TOP_STORIES = "https://hacker-news.firebaseio.com/v0/topstories.json";

class StoriesList extends Component {

    static propTypes = {
        addCurrentPage: PropTypes.func.isRequired,
        addStoriesId: PropTypes.func.isRequired,
        storiesId: PropTypes.array.isRequired,
    }

    handleCurrentPageChange = newPage => {
        this.props.addCurrentPage(newPage);
    }

    async fetchStories() {
        const response = await fetch(URL_TOP_STORIES);
        const result = await response.json();

        this.props.addStoriesId(result);
    }

    componentDidMount() {
        this.fetchStories();
    }

    componentDidUpdate() {
        this.fetchStories();
    }

    render() {
        return (
            <>
                <Title currentPage={this.props.currentPage} handleCurrentPageChange={this.handleCurrentPageChange} />

                {
                    (this.props.storiesId.length > 0)
                        ?
                        this.props.storiesId.map(storyIndex => (
                            <Story
                                storyIndex={storyIndex}
                                key={storyIndex}
                            />
                        ))
                        :
                        <Spinner />

                }
            </>
        )
    }
}

const mapStateToProps = ({ stories }) => ({
    currentPage: stories.currentPage,
    storiesId: stories.storiesId
});


const mapDispatchToProps = dispatch => ({
    addStoriesId: stories => { dispatch(addStoriesID(stories)) },
    addCurrentPage: currentPage => { dispatch(addCurrentPage(currentPage)) }
});

export default connect(mapStateToProps, mapDispatchToProps)(StoriesList);

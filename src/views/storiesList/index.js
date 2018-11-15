import React, { Component } from 'react';
import Title from './titleStory';
import Story from './story';

const URL_TOP_STORIES = "https://hacker-news.firebaseio.com/v0/topstories.json";
const STORIES_IN_SINGLE_PAGE = 20;

export default class StoriesList extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            stories: [],
        }
    }

    handleCurrentPageChange = newPage => {
        this.setState({
            currentPage: newPage
        });
    }

    async fetchStories() {
        const response = await fetch(URL_TOP_STORIES);
        const result = await response.json();

        const start = (this.state.currentPage - 1) * STORIES_IN_SINGLE_PAGE;
        const storiesToShow = result.splice(start, STORIES_IN_SINGLE_PAGE);

        // for (let i = start; i < start + STORIES_IN_SINGLE_PAGE; i++)
        //     storiesToShow.push(result[i]);

        this.setState({
            stories: storiesToShow
        });
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
                <Title currentPage={this.state.currentPage} handleCurrentPageChange={this.handleCurrentPageChange} />

                {this.state.stories.map(storyIndex => (
                    <Story
                        storyIndex={storyIndex}
                        key={storyIndex}
                    />
                ))}
            </>
        )
    }
}

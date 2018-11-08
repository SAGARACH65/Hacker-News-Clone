import React, { Component } from 'react';
import Title from '../Components/TitleStory';
import Story from '../Components/Story';

const URL_TOP_STORIES = "https://hacker-news.firebaseio.com/v0/topstories.json";
let storiesToShow = [];
const STORIES_IN_SINGLE_PAGE = 20;

export default class StoriesList extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            stories: [],
        }
    }

    handleCurrentPageChange = (newPage) => {
        console.log(newPage)
        this.setState({
            currentPage: newPage
        });
    }

    setStoriesToShow(result) {
        storiesToShow.length = 0;
        let start = (this.state.currentPage - 1) * STORIES_IN_SINGLE_PAGE;
        for (let i = start; i < start + STORIES_IN_SINGLE_PAGE; i++)
            storiesToShow.push(result[i]);
    }

    async fetchStories() {
        let response = await fetch(URL_TOP_STORIES);
        let result = await response.json();

        this.setStoriesToShow(result);

        this.setState({
            stories: result
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

                {storiesToShow.map(storyIndex => (
                    <Story
                        storyIndex={storyIndex}
                        key={storyIndex}
                    />
                ))}

            </>
        )
    }
}

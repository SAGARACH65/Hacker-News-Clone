import React, { Component } from 'react'
import Title from '../Components/Title';
import ListItem from '../Components/ListItem';

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
        this.forceUpdate();
    }

    setStoriesToShow(result) {
        storiesToShow.length = 0;
        let start = (this.state.currentPage - 1) * STORIES_IN_SINGLE_PAGE;
        for (let i = start; i < start + STORIES_IN_SINGLE_PAGE; i++)
            storiesToShow.push(result[i]);
    }

    componentDidMount() {
        fetch(URL_TOP_STORIES)
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
            )
    }

    render() {
        return (
            <>
                <Title currentPage={this.state.currentPage} handleCurrentPageChange={this.handleCurrentPageChange} />
                {storiesToShow.map(storyIndex => (
                    <ListItem
                        storyIndex={storyIndex}
                        key={storyIndex}
                    />
                ))}

            </>
        )
    }
}

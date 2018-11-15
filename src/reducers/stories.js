import {
    ADD_STORIES_ID,
    ADD_STORY,
    ADD_CURRENT_PAGE
} from '../actions';

const STORIES_IN_SINGLE_PAGE = 20;

const INITIAL_STATE = [{
    currentPage: 1
}];

const stories = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADD_STORIES_ID:
            const start = (state.currentPage - 1) * STORIES_IN_SINGLE_PAGE;
            return (action.stories.splice(start, STORIES_IN_SINGLE_PAGE));

        case ADD_STORY:
            return [
                ...state,
                {
                    link: action.link,
                    title: action.title,
                    id: action.id,
                    descendants: action.descendants,
                    score: action.score,
                    by: action.by,
                    time: action.time
                }
            ];

        case ADD_CURRENT_PAGE:
            return action.currentPage;

        default:
            return state;
    }
}

export default stories;
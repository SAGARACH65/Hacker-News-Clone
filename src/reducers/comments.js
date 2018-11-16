import { ADD_COMMENTS } from '../actions';

const INITIAL_STATE = {
    commentList: [],  
};

const stories = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case ADD_COMMENTS:
            return {
                ...state,
                comments: action.comments
            };

        default:
            return state;
    }
}

export default stories;

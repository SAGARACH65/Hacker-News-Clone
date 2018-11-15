import { ADD_COMMENTS } from '../actions';

const stories = (state = [], action) => {
   
    switch (action.type) {

        case ADD_COMMENTS:
            break;

        default:
            return state;
    }
}

export default stories;

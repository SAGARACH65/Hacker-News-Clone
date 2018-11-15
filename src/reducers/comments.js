import { ADD_COMMENTS, ADD_STORY } from '../actions';

const stories = (state = [], action) => {

    switch (action.type) {

        case ADD_COMMENTS:
            return {
                ...state,
                comments: {
                    ...state.comments,
                    [action.id]: {
                        link: action.link,
                        title: action.title,
                        id: action.id,
                        kids: action.kids,
                        descendants: action.descendants,
                        score: action.score,
                        by: action.by,
                        time: action.time,
                    }
                }
            };

        // case ADD_STORY:
        // console.log('asas')
        //     return {
        //         ...state,
        //         story: {
        //             link: action.link,
        //             title: action.title,
        //             id: action.id,
        //             kids: action.kids,
        //             descendants: action.descendants,
        //             score: action.score,
        //             by: action.by,
        //             time: action.time,
        //         }
        //     }

        default:
            return state;
    }
}

export default stories;

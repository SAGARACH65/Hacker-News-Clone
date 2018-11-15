export const ADD_COMMENTS = 'ADD_COMMENTS';
export const ADD_STORIES_ID = 'ADD_STORY_ID';
export const ADD_STORY = 'ADD_STORIES';
export const ADD_CURRENT_PAGE = "ADD_CURRENT_PAGE";

export const addComments = () => ({
    type: ADD_COMMENTS,

});

export const addStoriesID = stories => ({
    type: ADD_STORIES_ID,
    stories: stories
});

export const addCurrentPage = currentPage => ({
    type: ADD_CURRENT_PAGE,
    currentPage: currentPage
});

export const addStory = (link, title, id, descendants, kids, score, by, time) => ({
    type: ADD_STORY,
    link: link,
    title: title,
    id: id,
    descendants: descendants,
    kids: kids,
    score: score,
    by: by,
    time: time
});
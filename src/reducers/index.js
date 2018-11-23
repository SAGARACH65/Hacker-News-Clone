import { combineReducers } from 'redux'
import stories from './stories'
import comments from './comments'

export default combineReducers({
    stories,
    comments
})


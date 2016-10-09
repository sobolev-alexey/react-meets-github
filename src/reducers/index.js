import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import paginate from './paginate'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

// Updates an entity cache in response to any action with response.entities.
const entities = (state = { users: {}, repos: {} }, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }

    return state
}

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
    const { type, error } = action

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        switch (error) {
            case "Failed to fetch":
                return `GitHub API error: ${error}`
            case "Not Found":
                let user = action.login ? `with ID ${action.login} ` : ''
                return `GitHub user ${user}not found`
            default:
                return error
        }
    }

    return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
    reposByUser: paginate({
        mapActionToKey: action => action.login,
        types: [
            ActionTypes.REPO_REQUEST,
            ActionTypes.REPO_SUCCESS,
            ActionTypes.REPO_FAILURE
        ]
    })
})

const rootReducer = combineReducers({
    entities,
    pagination,
    errorMessage,
    routing
})

export default rootReducer

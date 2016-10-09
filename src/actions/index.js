import { CALL_API, Schemas } from '../middleware/api'

/**
 * Action Types
 */
export const USER_REQUEST = 'USER_REQUEST'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

export const REPO_REQUEST = 'REPO_REQUEST'
export const REPO_SUCCESS = 'REPO_SUCCESS'
export const REPO_FAILURE = 'REPO_FAILURE'

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'


// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchUser = login => ({
    [CALL_API]: {
        types: [ USER_REQUEST, USER_SUCCESS, USER_FAILURE ],
        endpoint: `users/${login}`,
        schema: Schemas.USER
    }
})


// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadUser = (login, requiredFields = []) => (dispatch, getState) => {
    const user = getState().entities.users[login]
    if (user && requiredFields.every(key => user.hasOwnProperty(key))) {
        return null
    }

    return dispatch(fetchUser(login))
}


// Fetches a page of own repos by a particular user.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchRepos = (login, nextPageUrl) => ({
    login,
    [CALL_API]: {
        types: [ REPO_REQUEST, REPO_SUCCESS, REPO_FAILURE ],
        endpoint: nextPageUrl,
        schema: Schemas.REPO_ARRAY
    }
})


// Fetches a page of own repos by a particular user.
export const loadRepos = (login, nextPage) => (dispatch, getState) => {
    const {
        nextPageUrl = `users/${login}/repos`,
        pageCount = 0
    } = getState().pagination.reposByUser[login] || {}

    if (pageCount > 0 && !nextPage) {
        return null
    }

    return dispatch(fetchRepos(login, nextPageUrl))
}


// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: RESET_ERROR_MESSAGE
})

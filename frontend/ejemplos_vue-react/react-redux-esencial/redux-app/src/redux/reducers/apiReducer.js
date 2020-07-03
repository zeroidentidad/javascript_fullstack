import * as types from '../actions/actionTypes';

const initialState = {
    list: [],
    loading: false,
    error: '',
}

const apiState = (state = initialState, action) => {
    switch (action.type) {
        case types.STORE_ALL: {
            return {
                ...state,
                list: action.payload.list,
                loading: action.payload.loading,
            }
        }
        case types.SENDING_REQUEST: {
            return {
                ...state,
                loading: action.payload.loading,
            }
        }
        case types.REQUEST_DATA: {
            return {
                ...state,
                list: action.payload.list,
                loading: action.payload.loading,
            }
        }
        case types.REQUEST_ERROR: {
            return {
                ...state,
                error: action.payload.error,
                loading: action.payload.loading,
            }
        }
        case types.REQUEST_POST_DATA: {
            return {
                ...state,
                ok: action.payload.ok,
                loading: action.payload.loading,
            }
        }
        default: return state;
    }
}

export default apiState;

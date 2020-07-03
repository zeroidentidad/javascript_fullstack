import * as types from './actionTypes';

export const nav_click = data => ({
    type: types.NAV_CLICK,
    payload: {
        title: data.title,
    }
})

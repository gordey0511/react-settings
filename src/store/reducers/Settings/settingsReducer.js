import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user: null,
    token: null,
    errors: null,
}
export const settingsReducer = createReducer(initialState,{
    SELECT_START: (state) => {
        state.isLoading = true;
        return state;
    },
    SELECT_SUCCESS: (state,  { data: {user, token}}) => {
        return {
            errors: null,
            isLoading: false,
            user,
            token,
        };
    },
    SELECT_FAIL: (state, action) => {
        state.isLoading = false;
        state.errors = action.error;
        return state;
    },
})
import { createAction } from "@reduxjs/toolkit";

export const setUserDataAction = createAction('__SET_USER_DATA__', function prepare(data) {
    return {
        payload: {
            data,
        }
    }
})

export const setUserInputAction = createAction('__SET_USER_INPUT__', function prepare(inputs) {
    return {
        payload: {
            inputs,
        }
    }
})
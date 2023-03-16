import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import userSlice from './slices/userSlice'

const makeStore = () => configureStore({
    reducer: {
        user: userSlice,
    }
})

export const wrapper = createWrapper(makeStore)
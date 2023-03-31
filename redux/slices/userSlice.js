import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { setUserDataAction, setUserInputAction } from '../actions/userAction';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        values: {
            first_name: '',
            last_name: '',
            father_name: '',
            edu_degree: '',
            id_number: '',
            national_code: '',
            birth_date: '',
            email: '',
            province: '',
            city: '',
            village: '',
            address: '',
            postal_code: '',
            plaque: '',
            job_province: '',
            job_city: '',
            job_address: '',
            card_number: '',
            shaba_number: '',
        },
        inputs: [
            {
                label: 'نام',
                key: 'first_name',
                value: '',
                disabled: false,
                type: 'text'
            },
            {
                label: 'نام خانوادگی',
                key: 'last_name',
                value: '',
                disabled: false,
                type: 'text'
            },
        ]
    },
    reducers: {},
    /* extraReducers: {
        __SET_USER_DATA__: (state, action) => {
            state = action.payload.data
            return state
        },
        [HYDRATE]: (state, action) => {
            state.data = {}
        }
    } */
    extraReducers: (builder) => {
        builder.addCase(setUserDataAction, (state, action) => {
            state.values = action.payload.data
            return state
        }).addCase(
            setUserInputAction, (state, action) => {
                state.inputs = action.payload.inputs
                return state
            }
        ).addCase(HYDRATE, (state, action) => { })
    }
})

export const selectUserData = state => state.user.values;
export const selectUserInputs = state => state.user.inputs;

export default userSlice.reducer
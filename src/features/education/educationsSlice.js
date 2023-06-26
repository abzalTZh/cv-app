import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchEducation = createAsyncThunk(
    'content/fetchEducation',
    async () => {
        const res = await axios('api/educations');
        const educations = await res.data;
        return educations;
    }
)

const educationSlice = createSlice({
    name: 'educations',
    initialState: {
        data: [],
        status: 'loading',
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchEducation.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(fetchEducation.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        })
        builder.addCase(fetchEducation.rejected, (state) => {
            state.status = 'failure';
        })
    },
});

// export const { fetchEducation, fetchEducationFailure, fetchEducationSuccess } = educationSlice.actions;

const educationReducer = educationSlice.reducer;
export default educationReducer;
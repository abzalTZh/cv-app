import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const storeSkills = (skills) => {
    localStorage.setItem('skills', JSON.stringify(skills));
};

const getStoredSkills = () => {
    const storedSkills = localStorage.getItem('skills');
    return storedSkills ? JSON.parse(storedSkills) : null;
};

export const fetchSkills = createAsyncThunk(
    'content/fetchSkills',
    async () => {
        const res = await axios('api/skills');
        const skills = await res.data;
        return skills;
    }
)

export const postSkills = createAsyncThunk(
    'content/postSkills',
    async(data) => {
        try {
            const res = await axios.post('api/skills', data);
            return res.data;
        } catch(err) {
            console.error(err);
        }
    }
)

const skillSlice = createSlice({
    name: 'skills',
    initialState: {
        skillsIsOpen: false,
        data: {
            skills: getStoredSkills() || [],
        },
        status: 'loading',
    },
    reducers: {
        toggleForm: (state) => {
            state.skillsIsOpen = !state.skillsIsOpen;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSkills.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(fetchSkills.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        })
        builder.addCase(fetchSkills.rejected, (state) => {
            state.status = 'failure';
        })
        builder.addCase(postSkills.fulfilled, (state, action) => {
            state.data.skills.push(action.payload);
            storeSkills(state.data.skills);
        })
    },
});

export const { toggleForm } = skillSlice.actions;

const skillsReducer = skillSlice.reducer;
export default skillsReducer;
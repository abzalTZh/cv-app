import { combineReducers } from "@reduxjs/toolkit";
import skillsReducer from "../features/skills/skillSlice";
import educationReducer from "../features/education/educationsSlice";

const rootReducer = combineReducers({
    skills: skillsReducer,
    education: educationReducer,
});
export default rootReducer;
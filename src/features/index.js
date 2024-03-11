// reducers/index.js

import { combineReducers } from '@reduxjs/toolkit';
import resumeSlice from '../features/Resume/resumeSlice'
import userReducers from '../features/Auth/authSlice'

const rootReducer = combineReducers({
    resume: resumeSlice,
    user: userReducers,
});

export default rootReducer;


import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = {
    personalInfo: {},
    educationInfo: [],
    workExpInfo: [],
    skillInfo: []
}

export const resumeSlice = createSlice({
    name: 'resume',
    initialState,
    reducers: {
        addPersonalDetails: (state, action) => {
            const { name, designation, mobile, email, dob, githubLink, address } = action.payload
            state.personalInfo = {
                name,
                designation,
                mobile,
                email,
                dob,
                githubLink,
                address
            };
        },
        addEducationDetails: (state, action) => {
            const { education, courseName, college, startDate, endDate } = action.payload
            let eduObj = {
               id: nanoid(), education, courseName, college, startDate, endDate
            }
            state.educationInfo.push(eduObj)
        },
        addWorkExpDetails: (state, action) => {
            const { designation, companyName, startDate, endDate } = action.payload
            let workExpObj = {
                id: nanoid(), designation, companyName, startDate, endDate
            }
            state.workExpInfo.push(workExpObj)
        },
        addSkillsDetails: (state, action) => {
            const { skillName } = action.payload
            let skill = {
                id: nanoid(), skillName
            }
            state.skillInfo.push(skill)
        },
        removeEducationDetails: (state, action) => {
            const { id } = action.payload;
            state.educationInfo = state.educationInfo.filter((edu) => edu.id !== id);
        },
        removeWorkExpDetails: (state, action) => {
            const { id } = action.payload;
            state.workExpInfo = state.workExpInfo.filter((workExp) => workExp.id !== id);
        },
        removeSkills: (state, action) => {
            const { id } = action.payload;
            state.skillInfo = state.skillInfo.filter((skill) => skill.id !== id);
        }
    },
})


export const {
    addPersonalDetails,
    addEducationDetails,
    addWorkExpDetails,
    addSkillsDetails,
    removeEducationDetails,
    removeWorkExpDetails,
    removeSkills
} = resumeSlice.actions

export default resumeSlice.reducer


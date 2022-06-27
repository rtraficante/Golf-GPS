import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: null,
  holes: null,
  scorecard: null,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setHoles: (state, action) => {
      state.holes = action.payload;
    },
    setScorecard: (state, action) => {
      state.scorecard = action.payload;
    },
  },
});

export const { setCourse, setHoles, setScorecard } = courseSlice.actions;

export const selectCourse = (state) => state.course.course;
export const selectHoles = (state) => state.course.holes;
export const selectScorecard = (state) => state.course.scorecard;

export default courseSlice.reducer;

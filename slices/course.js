import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: null,
  holes: null,
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
  },
});

export const { setCourse, setHoles } = courseSlice.actions;

export const selectCourse = (state) => state.nav.course;
export const selectHoles = (state) => state.nav.holes;

export default courseSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./Account/reducer";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentsReducer from "./enrollmentsSlice";

const store = configureStore({
  reducer: {
    accountReducer,
    modulesReducer,
    assignmentsReducer,
    enrollmentsReducer,
  },
});

export default store;
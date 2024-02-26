import foodSlice from "./Components/features/food/foodSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    food: foodSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";
import foodList from "../../../DummyData";

export const foodSlice = createSlice({
  name: "food",
  initialState: {
    foodList: foodList,
    freshFood: [],
    searchItem: {},
  },
  reducers: {
    filteredData: (state, action) => {
      const filteredItems = foodList.data.reduce((accumulator, item) => {
        if (item.category_name === action.payload) {
          // If the category matches, add the item to the accumulator
          accumulator.push(item);
        }
        if (action.payload === "ALL") {
          // Check if the category hasn't been added yet
          const categoryNotAddedYet = !accumulator.some(
            (accItem) => accItem.category_name === item.category_name
          );
          if (categoryNotAddedYet) {
            // If the category hasn't been added yet, add the first item from that category
            accumulator.push(item);
          }
        }
        return accumulator;
      }, []);

      state.freshFood = filteredItems;
    },
    setSearchItem: (state, action) => {
      state.searchItem = action.payload;
    },
  },
});

export const { filteredData, setSearchItem } = foodSlice.actions;
export default foodSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// const[count, setCount] = useState(0);
// const increment = () => {
//     setCount(count+1);
// }
// the above state how it works same we are doing in redux toolkit using createSlice 
export const counterSlice = createSlice({
    name: "count",
    initialState: 10,
    reducers: {
        increment: (state) => state + 1,
        incrementBy10: (state) => state + 10,
        decrement: (state) => state - 1,
        decrementBy10: (state) => state - 10,
        incrementByValue: (state, action) => state+= action.payload,
        incrementByInputValue: (state, action) => state+= action.payload,
    }
})

export const {increment, incrementBy10, decrement, decrementBy10, incrementByValue, incrementByInputValue} = counterSlice.actions;

export default counterSlice.reducer;
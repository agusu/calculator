import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  operation: "0",
  display: "0",
  showingResult: true,
  awaitingOperator: true,
}
export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    inputDigit: (state, action) => {
      let digit = action.payload;
      if (state.display === "0" && digit === "0") {
        return; // do nothing if adding 0 to empty (0) input
      }
      if (state.showingResult) {state.operation = "", state.display = ""}
      state.display = isNaN(state.display) ? digit : state.display + digit;
      state.operation = state.operation + digit;
      state.showingResult = false;
      state.awaitingOperator = true;
    },
    inputOperator: (state, action) => {
      if (state.showingResult) {
        state.operation = state.display;
        state.showingResult = false;
      }
      if (!state.awaitingOperator && action.payload !== "-") {
        state.operation = state.operation.slice(0, -1);
      }
      state.display = action.payload;
      state.operation = state.operation + action.payload;
      state.awaitingOperator = false;
    },
    inputDecimal: (state) => {
      if (state.display === "") {
        state.display = "0.";
        state.operation = "0.";
        return;
      }
      if (state.display.indexOf(".") === -1) { //it doesn't already have a decimal point
        state.display += "."
        state.operation += "."
      }
    },
    inputEqual: (state) => {
      if (!state.awaitingOperator || state.display.indexOf(".") === (state.display.length - 1) ) {
        state.operation = state.operation.slice(0, -1);
      }
      let result = eval(state.operation);
      state.operation = state.operation + "=" + result,
      state.display = String(result);
      state.showingResult = true;
    },
    clear: () => initialState,
    }
  },
)

// Action creators are generated for each case reducer function
export const { inputDigit, inputOperator, inputDecimal, inputEqual, clear} = calculatorSlice.actions

export default calculatorSlice.reducer
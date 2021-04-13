
const defaultState = {
  display: "",
  lastInput: "",
  result: 0,
}
const DIGIT = 'DIGIT'
const OPERATOR = 'OPERATOR'
const EQUAL = 'EQUAL'
/*
const digitReducer = (state = defaultState, action) => {
  switch (action.payload) {
    case '+':
      return {...state, 
        stack: [...state.stack, state.lastInput],
        lastInput: '+',
        display: state.currentInput+'+'}
    case '-':
      return {...state, 
        stack: [...state.stack, state.lastInput],
        lastInput: '-',
        display: state.currentInput+'-'}
    default:
      return state;
    }
}*/


const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
      case DIGIT:{
        if (!state.lastInput && action.payload === "0") {
          return state; // do nothing if adding 0 to empty (0) input
        }
        let inputtingNumber = state.lastInput + action.payload 
        return {...state, 
          lastInput: inputtingNumber,
          display: state.display + action.payload};}
      case OPERATOR:{
      let lastInput = state.lastInput ? state.lastInput : "0";
        return {...state, 
          lastInput: lastInput,
          display: state.display + action.payload};}
      case EQUAL:
        // eslint-disable-next-line no-eval
        // eslint-disable-next-line no-case-declarations
        let result = eval(state.display);
        return {...state,
          result: result,
          display: state.display + "=" + result,
          lastInput: result
          }
      default:
        return state;
  }
}

export default rootReducer
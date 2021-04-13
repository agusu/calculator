import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculator'

export default configureStore({
  reducer: {
    calculator: calculatorReducer
  },
})
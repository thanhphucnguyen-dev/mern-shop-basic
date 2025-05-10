import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from './slides/counterSlide'

export const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
})

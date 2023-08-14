import { createSlice } from '@reduxjs/toolkit'

type CounterState = {
  value: number
}

const initialState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const selectCounter = (state: {counter: CounterState}) => state.counter
export const { decrement, increment, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment(state){
            state.value ++
        },
        decrement(state){
            state.value --
        }
    }
})

export const {increment, decrement} = counterSlice.actions;
export const selectCount = (state) => state.counter.value
export default counterSlice.reducer



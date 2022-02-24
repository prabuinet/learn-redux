import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented(state) {
            // Immer makes it immutable under the hood
            state.value++;
        },
        decremented(state) {
            state.value--;
        },
        reset(state) {
            state.value = 0;
        }
    }
})

export const { incremented } = counterSlice.actions;
export default counterSlice.reducer;

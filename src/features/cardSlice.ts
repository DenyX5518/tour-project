import {createSlice} from '@reduxjs/toolkit'
import type { TourList } from '../types/typesTourCard';

const initialState:TourList = {
    list: []
}

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setTours(state, action){
            state.list = action.payload;
        }
    }
})
export const {setTours} = cardSlice.actions;
export default cardSlice.reducer;

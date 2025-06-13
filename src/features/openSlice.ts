import {createSlice} from '@reduxjs/toolkit'

const initialState:boolean = false

const modalSlice = createSlice({
    name: 'isModalOpen',
    initialState,
    reducers: {
        toggleModalOpen(state, action){
            return action.payload;
        }
    }
})
export const {toggleModalOpen} = modalSlice.actions;
export default modalSlice.reducer;
import {createSlice} from '@reduxjs/toolkit'

const initialState: number | null = null

const idSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        currentId(state, action){
           return action.payload;
        },
        deleteCurrentId(){
            return null;
        }
    }
})
export const {currentId, deleteCurrentId} = idSlice.actions;
export default idSlice.reducer;
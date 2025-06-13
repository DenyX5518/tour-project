import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type { FieldType } from '../types/typesForm';


const initialState:FieldType = {
    username: '',
    phone: '',
    password: ''
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFields(state:FieldType, action:PayloadAction<{name: keyof FieldType; value: string}>){
           state[action.payload.name] = action.payload.value;
        },
        resetFields(){
            return initialState;
        }
    }
})
export const {setFields, resetFields} = formSlice.actions;
export default formSlice.reducer;
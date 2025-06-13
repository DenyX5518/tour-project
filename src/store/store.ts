import {configureStore} from '@reduxjs/toolkit'
import cardSlice from '../features/cardSlice'
import idSlice from '../features/idSlice'
import openSlice from '../features/openSlice'
import formSlice from '../features/formSlice'
export const store = configureStore({
    reducer: {
        card: cardSlice,
        id: idSlice,
        isModalOpen: openSlice,
        formData: formSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
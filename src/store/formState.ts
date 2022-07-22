import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';

interface formState  {
    
    value: string,
    
    }


const initialState: formState = {
    
    value: "",
    
}

export const formSlice = createSlice({
    name: 'form',
    initialState,

    reducers: {
        onChange: (state, action: PayloadAction<formState>) => {
            
                    state.value = action.payload.value
                     
        },
    },
})

export const selectForm = (state:RootState) => state.formSlice.value;

export const {onChange} = formSlice.actions
export default formSlice.reducer
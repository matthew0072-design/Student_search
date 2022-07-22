import { createSlice } from '@reduxjs/toolkit';
import type {RootState} from './store';

interface statusState  {
    
    isSubmit: boolean,
    
    }


const initialState: statusState = {
    isSubmit: false,
    
}

export const statusSlice = createSlice({
    name: 'status',
    initialState,

    reducers: {
        onStatusHandler: (state) => {
            
           state.isSubmit = true;
                     
        },

        onFalseHandler: (state) => {
            state.isSubmit = false
        }
    },
})

export const selectStatus = (state:RootState) => state.statusSlice.isSubmit;

export const {onStatusHandler,onFalseHandler} = statusSlice.actions
export default statusSlice.reducer
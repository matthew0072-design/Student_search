import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';

interface getStudentArray  {
    
    studentArray: any
    
    }

   


const initialState:  getStudentArray = {
    
    studentArray: [],
    
}





export const getStudentArraySlice = createSlice({
    name: 'students',
    initialState,


    reducers: {
        onRequestArray: (state, action: PayloadAction<getStudentArray>) => {
    
                    state.studentArray = action.payload
                     
        
    },
}
})

export const selectArray = (state:RootState) => state.getStudentArraySlice.studentArray;


export const {onRequestArray} = getStudentArraySlice.actions
export default getStudentArraySlice.reducer









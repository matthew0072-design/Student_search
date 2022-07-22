import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from './store';

interface getStudentId  {
    
    studentId: any
    
    }

   


const initialState:  getStudentId = {
    
    studentId: [],
    
}





export const getStudentSlice = createSlice({
    name: 'students',
    initialState,


    reducers: {
        onRequest: (state, action: PayloadAction<getStudentId>) => {
            
                    state.studentId = action.payload
                     
        },

        
    },
})

export const selectForm = (state:RootState) => state.getStudentSlice.studentId;


export const {onRequest} = getStudentSlice.actions
export default getStudentSlice.reducer









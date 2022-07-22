import {configureStore} from '@reduxjs/toolkit';
import {formSlice} from './formState';
import {statusSlice} from './status';
import {getStudentArraySlice} from './studentArray'
import {getStudentSlice} from './studentId'
import { studentSlice } from './studentName';


export const store = configureStore({
    reducer: {
    formSlice: formSlice.reducer,
    statusSlice: statusSlice.reducer,
    getStudentSlice: getStudentSlice.reducer,
    getStudentArraySlice: getStudentArraySlice.reducer,
    
   [studentSlice.reducerPath]: studentSlice.reducer
    },

    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck:false}).concat(studentSlice.middleware),

    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
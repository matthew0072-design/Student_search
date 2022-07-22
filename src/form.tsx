import React from "react";
import {useAppSelector, useAppDispatch} from './store/hooks';
import {onChange} from './store/formState';
import {onStatusHandler} from './store/status'
import style from './Styles/form.module.css'

const FormInput: React.FunctionComponent = () => {
        const formState = useAppSelector(state =>state.formSlice.value)
       const dispatch = useAppDispatch()
        
    
    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onChange({value: event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1)}))
    };

        
    const onSubmitHandler =  (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

       
        dispatch(onStatusHandler())
        
       
    };



    return (
        <div className={style.container}>
        <form onSubmit={onSubmitHandler}>
            <label> Student Name:
        <input type="text" name="student" id="student" className={style.input} value={formState} onChange={onChangeHandler} />
        </label>
        <br/>
        <button type="submit" className={style.btn}>Login</button>
        
        </form>
       
        
        
        </div>

    )
}

export default FormInput;
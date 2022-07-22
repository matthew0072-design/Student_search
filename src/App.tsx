import React from 'react';
import {useAppSelector} from './store/hooks';
import FormInput from './form'
import FilterList from './filterList'
import './App.css';

function App() {

  const formStatus = useAppSelector(state => state.statusSlice.isSubmit)
  const formState = useAppSelector(state => state.formSlice.value)
  return (
    <div className="App">
      
     {formStatus ?  <FilterList /> : <FormInput />   }
    
      
    </div>
  );
}

export default App;

import React, {useEffect} from "react";
import { useAppSelector,useAppDispatch } from './store/hooks';
import { useGetStudentNameQuery} from './store/studentName';
import {onFalseHandler} from './store/status'
import {onRequest} from './store/studentId';
import {onRequestArray} from './store/studentArray'
import { Circles } from  'react-loader-spinner';
import axios from "axios";
import style from './Styles/filterList.module.css';
import ErrorMessage from '../src/errorMessage'


const FilterList: React.FunctionComponent = () => {

  const formState = useAppSelector((state:any) => state.formSlice.value)
  
  const studentArray =   useAppSelector((state:any) => state.getStudentArraySlice.studentArray)
  const dispatch = useAppDispatch()
  const { data: posts, isFetching, isSuccess } = useGetStudentNameQuery(JSON.stringify(formState))
  
  
  const KEY = 'keyycn9U196hSGPD0';
   // console.log(posts)

  
   useEffect(() => {
    const getStudentArray:any = async () => {
        let {data:data1}:any = await axios.get('https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Students',
        {
          headers: {
            Authorization: `Bearer ${KEY}`
          }
        }
        )
         
         
        dispatch(onRequestArray(data1))
                
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
        getStudentArray()
        

},[dispatch])
  
   useEffect(() => {
    const getStudent:any = async () => {
        
        let {data} = await axios.get('https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes', 
        {
           headers: {
             Authorization: `Bearer ${KEY}`
          } 
        } 
        ) 
         
         
        dispatch(onRequest(data))
                        
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }
        getStudent()
        

},[dispatch])
  
  
  
const onLogoutHandler = (event: React.MouseEvent<HTMLElement>) => {
  
  dispatch(onFalseHandler())
  
}


  let content
  
  if (isFetching) {
   content =  
   <div className={style.fetch}><Circles
   height="100"
   width="100"
   color='blue'
   ariaLabel='loading'
 />
 </div>
  } else if (isSuccess) { 
    
  
   const studentData:any = {}

   for(const record of studentArray.records) {
    
     studentData[record.id] = record.fields.Name
   }
  
  
   
  content =  posts.records.map((record:any) => {
       
          return <div key={record.id} className={style.success}>
            <section className={style.content}>           
           <p className={style.psuccess}>Name</p>
         <p>{record.fields.Name}</p>
         <div> 
      <p className={style.psuccess}>Students</p>
      {record.fields.Students.map((id:any) =>{ 
        return <span className={style.fields}>
        {studentData[id]}
        </span>
        })}
      </div>
      </section>
        
  </div>
        })
  
        
} 
  else {
    
     
  content = <ErrorMessage />
  }

  return (
    <div className={style.container}>
  <button onClick={onLogoutHandler} className={style.btn}>Logout</button>
    {content}
  </div>
  )
}



export default FilterList
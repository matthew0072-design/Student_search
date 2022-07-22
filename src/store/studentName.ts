import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const KEY = 'keyycn9U196hSGPD0';


export const studentSlice = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({baseUrl: "https://api.airtable.com/v0/app8ZbcPx7dkpOnP0"}),
    endpoints: builder => ({
        getStudentId: builder.query({
            query: () => ({
                url:'/Students?fields%5B%5D=Name',
                headers: {
                    Authorization: `Bearer ${KEY}`
                }
            })
        }),
       
        getStudentName: builder.query({
            query: (studentId: string) => ({
                url:`/Classes?filterByFormula=SEARCH(${studentId},{Students})`,
                headers: {
                    Authorization: `Bearer ${KEY}`
                }
            })
        })

       
    })
})

export const {useGetStudentNameQuery, useGetStudentIdQuery} = studentSlice


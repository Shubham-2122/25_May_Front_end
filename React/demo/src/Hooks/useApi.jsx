import axios from 'axios'
import React, { useEffect, useState } from 'react'

function useApi(data) {


    const [test,settest] = useState([])

    // useEffect(()=>{
    //     fetchdata()
    // },[])

    const fetchdata=async()=>{
        try {
            const res = await axios.get(data)
            settest(res.data)
        } catch (error) {
            console.log("erer : ",error)
        }
    }

  return {test,fetchdata}
}

export default useApi

import axios from 'axios'
import React, { useState } from 'react'

function useAPI(api) {
  
    const [test,settest] = useState([])

    const fetchdata=async()=>{
        try {
            const res = await axios.get(api)
            settest(res.data)
        } catch (error) {
            console.log("Api error ",error)
        }
    }

    return {test,fetchdata}
}

export default useAPI
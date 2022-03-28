import React, { useEffect, useState } from 'react'
import "./result.css"
import axios from 'axios'
const Result = ({query}) => {
    const [data,setData] = useState([])
    console.log(data)
    useEffect(async ()=>{
            const response = await axios.get(`https://barikoi.xyz/v1/api/search/autocomplete/MzE2NDo3TEZGWkZFNUpR/place?q=${query}`)
            const data = await response.data
            setData(data.places)
    },[query])
    if(data){
        return (
            <div className='result'>
                {data.map((place)=>{
                return  <h3>{place.address}</h3>
                })}
            </div>
        )
    }else{
        return <></>
    }
    
}

export default Result
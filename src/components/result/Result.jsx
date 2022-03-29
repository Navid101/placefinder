import React, { useEffect, useState } from 'react'
import "./result.css"
import axios from 'axios'
import Place from '../place/Place'
const Result = ({query,setValue}) => {
    const [data,setData] = useState([])
    useEffect(async ()=>{
            const response = await axios.get(`https://barikoi.xyz/v1/api/search/autocomplete/MzE2NDo3TEZGWkZFNUpR/place?q=${query}`)
            const data = await response.data
            setData(data.places)
    },[query])
    if(data){
        return (
            <div className='result'>
                {data.map((place)=>{
                return  <Place place={place} setValue={setValue} key={place.id}></Place>
                })}
            </div>
        )
    }else{
        return <></>
    }
    
}

export default Result
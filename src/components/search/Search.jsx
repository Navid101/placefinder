import { ArrowBackIosNew } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import Result from '../result/Result';
import "./search.css"
const Search = () => {
  const [value,setValue] = useState("")
  return (
    <div className='search active'>
        <div className="logo-container">
            <div className="logo">
                <span className='dark'>Bari</span>
                <span className='light'>koi</span>
            </div>
            <ArrowBackIosNew></ArrowBackIosNew>
        </div>
        <div className="input-container">
            <input className='input' type="text" placeholder='Search Location' onChange={(e)=>setValue(e.target.value)}/>
            <button className='btn'><SearchIcon></SearchIcon></button>
        </div>
        {value && <Result query={value}></Result>}
    </div>
  )
}

export default Search
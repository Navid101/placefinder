import { ArrowBackIosNew } from '@mui/icons-material'
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import Result from '../result/Result';
import {useDispatch, useSelector} from "react-redux"
import "./search.css"
import Info from '../info/Info';
import { update } from '../../redux/placeSlice';
const Search = () => {

  let place = useSelector(state=>state.place.place)
  const dispatch = useDispatch()
  console.log(place)
  const handleClick = ()=>{
    place = ""
    setValue("")
    dispatch(update(place))
  }
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
            <input className='input' type="text" placeholder='Search Location' onChange={(e)=>setValue(e.target.value)} value={value}/>
            {!place && !value? <button className='btn'><SearchIcon></SearchIcon></button>: <ClearIcon onClick={()=>handleClick()}></ClearIcon>}
        </div>
        {value && <Result query={value} setValue={setValue}></Result>}
        {place && <Info place={place}></Info>}
    </div>
  )
}

export default Search
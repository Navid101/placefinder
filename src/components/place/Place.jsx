import React from 'react'
import "./place.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/placeSlice';
const Place = ({place,setValue}) => {
  const dispatch = useDispatch()
  const handleClick = ()=>{
    dispatch(update(place))
    setValue("")
  }
  return (
    <div className='placeContainer' onClick={()=>handleClick()}>
      <LocationOnIcon></LocationOnIcon>
      <div className="infoContainer">
        <h3 className='pBold'>{place.address}</h3>
        <h3 className='pThin'>{place.city}</h3>
        <button className='pBtn'>{place.pType}</button>
      </div>
    </div>
  )
}

export default Place
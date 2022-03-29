import React from 'react'
import "./info.css"
const Info = ({place}) => {
  return (
    <div className='infoContainer'>
        <h1>{place.address}</h1>
        <h3 className='pThin'>Area: {place.area}</h3>
        <h3 className='pThin'>City: {place.city}</h3>
        <h3 className='pThin'>Post: {place.postCode}</h3>
        <button className='iBtn'>{place.pType}</button>
    </div>
  )
}

export default Info
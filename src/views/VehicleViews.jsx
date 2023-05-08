import React from 'react'
import './vehicleviews.css'

function VehicleViews({vehicle}) {
  return (
    <div className='cards'>
      <h1 className='cards__title'>{vehicle.name}</h1>
      <h2 className='cards__description'>{vehicle.description}</h2>
      <img className='cards__img' src={vehicle.image} alt={vehicle.name + "image"} />
    </div>
  )
}

export default VehicleViews

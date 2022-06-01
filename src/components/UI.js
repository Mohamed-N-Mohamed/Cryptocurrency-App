import React from 'react'

const UI = ({name, price, symbol, marketcap, volume, image, priceChange}) => {
  return (
    <div className="display-data w-96 h-14">
      <div className="crypto">
        <img src={image} alt="crypto" className='w-7 h-7'/>
        <h1>{name}</h1>
        <p className='uppercase'>{symbol}</p>
      </div>
      <div className="crypto-data">
        <p>${price}</p>
        <p>${volume}</p>

      </div>
     
    </div>
  )
}

export default UI
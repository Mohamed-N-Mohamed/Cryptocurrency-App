import React from 'react'

const UI = ({name, price, symbol, marketcap, volume, image, priceChange}) => {
  return (
    <div className="display-data flex justify-center">
      <div className="crypto flex items-center w-96 gap-2 p-8">
        <img src={image} alt="crypto" className='w-7 h-7'/>
        <h1>{name}</h1>
        <p className='uppercase'>{symbol}</p>

        <div className="crypto-data flex gap-4 w-20">
        <p>${price}</p>
        <p>${volume}</p>
        <p>{priceChange.toFixed(2)}$</p>
      </div>
      </div>
    </div>
  )
}

export default UI
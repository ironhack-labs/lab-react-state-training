import React from 'react'

export const Counter = ({plusCounter, minusCounter, counter}) => {
  return (
    <div className='counterContainer'>
        <button className='likeBtn' onClick={minusCounter}>-</button>
        <p>{counter}</p>
        <button className='likeBtn' onClick={plusCounter}>+</button>
    </div>
  )
}

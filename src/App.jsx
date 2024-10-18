import React, { useState } from 'react'
import "./App.css"

function App() {
  const [count, setCount] = useState(1)
  const [secondCount, setSecondCount] = useState(count)


  const minusHandler = () => {

    setCount((num) => num > 1 ? num - 1 : num)
  }
  const plusHandler = () => {
    setCount((num) => num + 1)
  }

  const secondMinusHandler = () => {
    setSecondCount((num) => num > count ? num - count : num)
  }

  const secondPlusHandler = () => {
    setSecondCount((num) => num + count)
  }

  const current = () => {
    let date = new Date()
    let local = date.toLocaleString()
    return local;
  }



  return (
    <>

      <div className="container">
        <div className="box">
          <div className="boxy1">
            <button type="button" className='btn' onClick={minusHandler}>-</button>
            <span >Step: {count}</span>
            <button type="button" className='btn' onClick={plusHandler}>+</button>
          </div>
          <div className="boxy2">
            <button type="button" className='btn' onClick={secondMinusHandler}>-</button>
            <span >Step: {secondCount}</span>
            <button type="button" className='btn' onClick={secondPlusHandler}>+</button>
          </div>
          <br />
          <div className="boxy3">
            <p>{current()}</p>
          </div>
        </div>
      </div>



    </>
  )
}

export default App

















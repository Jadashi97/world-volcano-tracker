import spinner from './spinner.gif'

import React from 'react'

const Loader = () => {
  return (
    <div>
        <img src={spinner} alt="Loading" />
        <h1>Fetching Data</h1>
    </div>
  )
}

export default Loader

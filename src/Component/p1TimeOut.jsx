import React from 'react'
import useTimeout from '../Hooka/useTimeout'

const ProOne = () => {
    const ready = useTimeout(5000);
   return (
    <div>
        <h1>
          {ready ? "Hurray am Ready":"Oops I am not ready"}
        </h1>
    </div>
  )
}

export default ProOne
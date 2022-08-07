import React from 'react'
import useFetch from '../Hooka/useFetch'

const DataFetch = () =>{
    const {loading, data, error} = useFetch()
  return (
    <div>
       <p>{loading? 'Loading':'Completed'}</p>

        {/* {data.localeCompare((item)=>{
            return <div key={item.id}>{item.login}</div>
        })} */}

    </div>
  )
}

export default DataFetch
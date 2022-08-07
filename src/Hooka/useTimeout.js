import { useEffect, useState } from 'react'
const useTimeout = () => {
  const [ready,setReady] = useState(false)
  
  useEffect(()=>{
     let timer = setTimeout(()=>{
         setReady(true)
     },5000)
     return()=>{
      clearTimeout(timer)
     }
  },[])
  return ready
}

export default useTimeout
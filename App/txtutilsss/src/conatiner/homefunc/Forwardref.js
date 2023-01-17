import React ,{forwardRef}from 'react'

const Forwardref = forwardRef((props,ref)=> {
  return (
    <div>
        <input   ref={ref}  {...props} />
    </div>
  )
})
export default  Forwardref ;
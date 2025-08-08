import React, { useState } from 'react'

const hello = () => {
    const[name,setName]=useState('');
    const handleOnChange = (e) =>{
        setName(e.target.value);
    }
  return (
    <div>
      <input type="text" value={name} onChange={handleOnChange}/>
    </div>
  )
}

export default hello

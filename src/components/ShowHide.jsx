import React, { useState } from 'react'

function ShowHide() {

  const [show,setShow]=useState(true);

  const handleClick=(e)=>{

    setShow(!show);
  }


  return (
    <div>

      <button onClick={handleClick}>{show ? 'Hide Text': 'Show Text'}</button>

        {show ? <h2>HIDE ME!</h2>: ""}
      
    </div>
  )
}

export default ShowHide

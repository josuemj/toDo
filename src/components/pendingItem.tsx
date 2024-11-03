import React from 'react';
import './pendingItems.css'
interface pendingTask{
  pendingTask : string
}

const PendingTask: React.FC<pendingTask> = ({pendingTask}) => {
  return(
    <>
    <div className='pendingItem'>
      <button></button>
      <h3>{pendingTask}</h3>
      <button></button>
    </div>
    </>
  )
}

export default PendingTask
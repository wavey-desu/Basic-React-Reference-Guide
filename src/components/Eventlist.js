import React from 'react'
import styles from './Eventlist.module.css'

export default function Eventlist({events, handleClick}) {
  return (
    <div>
        {events.map( (e,index)=> ( //iterate over events usestate array 
        //long way of creating a react fragment
        <React.Fragment key={e.id}>  
        <div className={styles.card}> {/* component scoped stylsheet class */}
          <h2>My name is {e.title}</h2>
          <button onClick={() => handleClick(e.id)}>ok</button> 
        </div>
        </React.Fragment>
      ) )}
    </div>
  )
}

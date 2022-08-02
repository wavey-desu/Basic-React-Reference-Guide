import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

export default function Modal(props) {
  return ReactDom.createPortal((
    <div className='modal-backdrop'>
        <div className='modal'>
            {props.children}
            {/* conditional class on btn if modalConditional (t/f) w/ternary operator */}
            <button onClick={props.handleClose} className={props.modalConditional ? "modaltrue" : ""}>we're gonna have a problem here</button>
        </div>
    </div>
  ), document.body)
}

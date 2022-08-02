import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'

export default function Modal(props) {
  return ReactDom.createPortal((
    <div className='modal-backdrop'>
        <div className='modal'>
            {props.children}
            <button onClick={props.handleClose}>we're gonna have a problem here</button>
        </div>
    </div>
  ), document.body)
}

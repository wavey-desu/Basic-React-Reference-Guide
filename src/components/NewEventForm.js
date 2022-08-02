import './NewEventForm.css'

import React, { useState } from 'react'

export default function NewEventForm({addEvent, handleClose}) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const resetForm = () => {
        setTitle('')
        setDate('')
    }

    const handleSubmit = (e) => {
        e.preventDefault() //prevent default behaivour i.e. refreshing page

        const event = {
            title: title,
            date: date,
            id: Math.floor(Math.random() * 1000)
        }
        console.log(event);
        addEvent(event)
        handleClose()
        resetForm()
    }

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
        <label>
            <span>Event Title</span>
            {/* onChange fires everytime users type/select */}
            <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
            <span>Event Date</span>
            <input required type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
        </label>
        <button>Submit</button>
    </form>
  )
}

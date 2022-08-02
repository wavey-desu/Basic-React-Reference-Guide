import './App.css';
import React, {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal';
import Eventlist from './components/Eventlist';
import NewEventForm from './components/NewEventForm';

function App() {
  // const [name, setName] = useState('what my name is ')

  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])
  const subtitle = "yes im the real shady"//subtitle prop
  
  const addEvent = (e) => {
    setEvents((prevEvents) => {
      return [...prevEvents, e] //... is a spread operator used to merge objects & arrays
    })
  }
  
  const handleClick = (id)=>{
    // setName('chk chk slim shady') //setName called and passed new parameters
    
    setEvents((prevEvents)=> { // previous state value guarantee to stay up to date
      return prevEvents.filter((e)=>{  //whatever u state update, depends on the previous state | always use callback to acces previous state
        return id !== e.id   //return filter only if !=
      })
    })
  }
  

  const handleClose = () => {
    setShowModal(false)
  }

  ////////// RETURN COMPONENTS ON APP /////////
  return (
    <div className="App">

    {/* title and subtitle === props */}
    <Title title="Im the real shady" subtitle={subtitle}/> 

      {/* only show events if showEvents true | pass events usestate and handleclick fnctn as props */}
      {showEvents && <Eventlist events = {events} handleClick = {handleClick}/>} 

      <div>
        {/* Show btn when showEvents True */}
        {showEvents && ( <button onClick={()=>setShowEvents(false)}>hide</button>)} 
        {/* Show btn when showEvents False */}
        {!showEvents && (<button onClick={()=>setShowEvents(true)}>show</button>)}
      </div>

      {/*  */}
      {showModal && <Modal handleClose={handleClose} modalConditional={true}> 
        <NewEventForm addEvent={addEvent} handleClose={handleClose}/>
      </Modal>}

      <button onClick={() => setShowModal(true)}>Add new bar</button>
    </div>    
  );
}

export default App;

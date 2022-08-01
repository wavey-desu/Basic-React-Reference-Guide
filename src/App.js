import './App.css';
import {useState} from 'react'
import Title from './components/Title'

function App() {
  // const [name, setName] = useState('what my name is ')
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: 'what', id:1 },
    {title: 'who ', id:2},
    {title: 'chk chk slim shady', id:3}
  ])

  const handleClick = (id)=>{
    // setName('chk chk slim shady')
    setEvents((prevEvents)=> { // previous state value guarantee to stay up to date
      return prevEvents.filter((e)=>{  //whatever u state update, depends on the previous state | always use callback to acces previous state
        return id !== e.id   //return only if !=
      })
    })
    console.log(id);
  }
  

  return (
    <div className="App">
    <Title />
      {/* <h1>my name is {name}</h1> */}
      {/* <button onClick={handleClick}>who</button> */}

      {showEvents && events.map( (e,index)=> ( //only show events if showEvents true
        <div key={e.id}>
          <h2>My name is {e.title}</h2>
          <button onClick={()=>handleClick(e.id)}>ok</button>
        </div>
      ) )}

      <div>
        {/* Show btn when showEvents True */}
        {showEvents && ( <button onClick={()=>setShowEvents(false)}>hide</button>)} 
        {/* Show btn when showEvents False */}
        {!showEvents && (<button onClick={()=>setShowEvents(true)}>show</button>)}
      </div>
    </div>
    
  );
}

export default App;

 
 
import { useEffect, useState } from 'react'
import './App.css'
import InputBox from './components/InputBox'
import MessageCard from './components/MessageCard'

function App() {
  const[message, setMessage]=useState([])
  const [newMessage, setNewMessage]=useState({
    content:"",
    time:"",
    sender:""
  })

  useEffect(()=>{
    setMessage([
      ...message,
      newMessage
    ])
  },[newMessage])
 

  return (
    <>
       <div>
     <InputBox newMessage={newMessage} setNewMessage={setNewMessage}/>
     <MessageCard  message={message}/>
       </div>
    </>
  )
}

export default App

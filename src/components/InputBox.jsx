import React, { useState } from 'react';

function InputBox(props) {
    const{newMessage, setNewMessage}=props;
    const [text, setText]=useState("")

     function handleMessageTyping(event){
        const {value}=event.target;
 
            setText(value)
     
       return;
     }
    
function  handleMessageSubmit(event){
     event.preventDefault();
     if(text.trim()){
     setNewMessage({
        ...newMessage,
        "content":text,
        "time":getCurrentTime(),
        "sender":randomUser()
     })
    }
     setText("")
    }


    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const currentDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        
        return `  ${hours}:${minutes}`;
    }
    
  function randomNumber(max,min){
const random=Math.floor(Math.random()*(max-min+1)+min);

return random;
  }

    function randomUser(){
        const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
     const random=randomNumber(user_list.length-1,0);
   
     return user_list[random]
    }
    
    console.log(getCurrentTime());


    return (
        <div>
            <form onSubmit={handleMessageSubmit}>
                <input type='text' placeholder='Type your message'   value={text} onChange={handleMessageTyping}/>
                <button type='submit'>Send</button>
            </form>
        </div>
    );
}

export default InputBox;